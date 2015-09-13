json.array!(@apiaries) do |apiary|
  json.extract! apiary, :id, :name, :location, :hive_type, :user_id
  json.url apiary_url(apiary, format: :json)
end
