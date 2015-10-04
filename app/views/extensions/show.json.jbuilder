json.extract! @extension, :id, :order_id, :hive_id
json.frames(@frames) do |frame|
  json.extract! frame, :id
end
