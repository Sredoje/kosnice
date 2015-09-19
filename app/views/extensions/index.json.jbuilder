json.array!(@extensions) do |extension|
  json.extract! extension, :id, :order_id, :hive_id
  json.url extension_url(extension, format: :json)
end
