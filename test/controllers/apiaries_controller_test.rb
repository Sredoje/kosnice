require 'test_helper'

class ApiariesControllerTest < ActionController::TestCase
  setup do
    @apiary = apiaries(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:apiaries)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create apiary" do
    assert_difference('Apiary.count') do
      post :create, apiary: { hive_type: @apiary.hive_type, location: @apiary.location, name: @apiary.name, user_id: @apiary.user_id }
    end

    assert_redirected_to apiary_path(assigns(:apiary))
  end

  test "should show apiary" do
    get :show, id: @apiary
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @apiary
    assert_response :success
  end

  test "should update apiary" do
    patch :update, id: @apiary, apiary: { hive_type: @apiary.hive_type, location: @apiary.location, name: @apiary.name, user_id: @apiary.user_id }
    assert_redirected_to apiary_path(assigns(:apiary))
  end

  test "should destroy apiary" do
    assert_difference('Apiary.count', -1) do
      delete :destroy, id: @apiary
    end

    assert_redirected_to apiaries_path
  end
end
