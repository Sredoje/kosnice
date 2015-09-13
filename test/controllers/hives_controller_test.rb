require 'test_helper'

class HivesControllerTest < ActionController::TestCase
  setup do
    @hive = hives(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:hives)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create hive" do
    assert_difference('Hive.count') do
      post :create, hive: { apirary_id: @hive.apirary_id, number: @hive.number, order_id: @hive.order_id, type: @hive.type }
    end

    assert_redirected_to hive_path(assigns(:hive))
  end

  test "should show hive" do
    get :show, id: @hive
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @hive
    assert_response :success
  end

  test "should update hive" do
    patch :update, id: @hive, hive: { apirary_id: @hive.apirary_id, number: @hive.number, order_id: @hive.order_id, type: @hive.type }
    assert_redirected_to hive_path(assigns(:hive))
  end

  test "should destroy hive" do
    assert_difference('Hive.count', -1) do
      delete :destroy, id: @hive
    end

    assert_redirected_to hives_path
  end
end
