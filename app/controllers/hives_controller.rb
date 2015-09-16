class HivesController < ApplicationController
  before_action :set_hive, only: [:show, :edit, :update, :destroy]

  # GET /hives
  # GET /hives.json
  def index
    @hives = Hive.all
  end

  # GET /hives/1
  # GET /hives/1.json
  def show
  end

  # GET /hives/new
  def new
    @hive = Hive.new
    @apiaries = Apiary.where(user_id:current_user.id)
  end

  # GET /hives/1/edit
  def edit
    @apiaries = Apiary.where(user_id:current_user.id)
  end

  # POST /hives
  # POST /hives.json
  def create
    @hive = Hive.new(hive_params)

    respond_to do |format|
      if @hive.save
        format.html { redirect_to @hive, notice: 'Hive was successfully created.' }
        format.json { render :show, status: :created, location: @hive }
      else
        format.html { render :new }
        format.json { render json: @hive.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /hives/1
  # PATCH/PUT /hives/1.json
  def update
    respond_to do |format|
      if @hive.update(hive_params)
        format.html { redirect_to @hive, notice: 'Hive was successfully updated.' }
        format.json { render :show, status: :ok, location: @hive }
      else
        format.html { render :edit }
        format.json { render json: @hive.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /hives/1
  # DELETE /hives/1.json
  def destroy
    @hive.destroy
    respond_to do |format|
      format.html { redirect_to hives_url, notice: 'Hive was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_hive
      @hive = Hive.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def hive_params
      params.require(:hive).permit(:number, :hive_type, :apiary_id, :order_id)
    end
end
