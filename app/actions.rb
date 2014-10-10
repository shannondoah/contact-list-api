# Homepage (Root path)
get '/' do
  erb :index
end

get '/contacts' do
  content_type :json
  contacts = Contact.all
  contacts.to_json
end

get '/contacts/:id' do
  content_type :json
  contact = Contact.find(params[:id])
  contact.to_json
end

post '/contacts' do
  content_type :json
  contact = Contact.create(
    firstname: params[:firstname],
    lastname: params[:lastname],
    email: params[:email]
    )
  contact.to_json
end

post '/contacts/:id' do
  content_type :json
  contact = Contact.find(params[:id])
  Contact.destroy(contact.id)
  contact.to_json
end

=begin

Set up restful actions which will deal with models

Use jquery ajax to deal with those actions and produce output on the html page .


Routes:

help - get / - index? list of links? to functions?  
new - get contact/new, post contacts
list - get contacts 
show - get contacts?key=value 
find - get contact/:id
invalid query - get error ??
  
=end

