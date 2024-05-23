"use client"
import {
   Form
} from "@/components/ui/form";
import { getGif } from "@/lib/data";
import { Gif } from "@giphy/react-components";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
   email: z.string().min(2).max(50),
   message: z.string().min(2),
})

export function ProfileForm() {
   // 1. Define your form.
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         email: "",
         message: "",
      },
   })
   const { data: gif, error, isFetched } = useQuery({
      queryKey: ["Gif"],
      queryFn: () => getGif({ apiKey: "sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh", id: "TfbqwmizD6vTrrhJuL" })
   })


   // 2. Define a submit handler.
   function onSubmit(values: z.infer<typeof formSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values)
   }
   return (
      <Form {...form}>
         <motion.div initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      viewport={{ once: true }} className="grid grid-flow-col md:grid-cols-[0.1fr,2.8fr,0.1fr] lg:grid-cols-[0.25fr,2.5fr,0.25fr]  2xl:grid-cols-[0.625fr,1.75fr,0.625fr] w-full bg-background relative justify-items-center place-content-center h-[100vh]">
            <div className="col-start-2 grid grid-flow-col gap-5 place-content-evenly w-full">
               {/* <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-8">
                  <FormField
                     control={form.control}
                     name="email"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Votre email</FormLabel>
                           <FormControl>
                              <Input placeholder="email@gm...." {...field} />
                           </FormControl>
                           <FormDescription>
                              exemple: email@gmail.com
                           </FormDescription>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="message"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Votre message</FormLabel>
                           <FormControl>
                              <Textarea placeholder="Bonjour..." {...field} />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <Button type="submit">Envoyer</Button>
               </form> */}
               <div className="grid grid-flow-row place-content-center gap-4">
                  <p>
                     Contactez moi directement à l'adresse suivante: <br />
                  </p>
                  <div className="relative">
                     <a className="peer hover:block underline" href="mailto:m.loulou9311@gmail.com">m.loulou9311@gmail.com</a>
                     <span className="hidden peer-hover:block absolute top-0 left-0 -translate-y-[100%]">
                        {gif ? <Gif backgroundColor="transparent" gif={gif} width={100} /> : null}
                     </span>
                  </div>
               </div>
            </div>
         </motion.div>
      </Form>
   )
}