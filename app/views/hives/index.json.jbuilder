json.array!(@hives) do |hive|
  json.extract! hive, :id, :number, :hive_type, :apiary_id, :order_id
  json.url hive_url(hive, format: :json)
end
