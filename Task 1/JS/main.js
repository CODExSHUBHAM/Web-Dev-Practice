import { createClient } from '@supabase/supabase-js'

console.log('hello world')

// Create a single supabase client for interacting with your database 
const supabase = createClient('https://bvlrhkxalnoqevcsspoz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2bHJoa3hhbG5vcWV2Y3NzcG96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI5NDU3OTAsImV4cCI6MTk2ODUyMTc5MH0.spwhylI9YfNQZCzQNkRJWeKMtDvmBsfKGWScCExsu2c')


async function loadData() {
    const { data, error } = await supabase
            .from('Features')
            .select()

    console.log(data)
    console.log("error")
}

loadData()