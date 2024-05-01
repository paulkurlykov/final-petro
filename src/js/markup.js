export const firstCalcMarkUp = `
<div class="popup_dialog">
    <div class="popup_calc_content text-center">
        <button type="button" class="popup_close"><strong>&times;</strong></button>
        <h2>Калькулятор</h2>
        <h3>
            Выберите форму балкона
            <br />
            и укажите размеры
        </h3>
        <div class="popup__icon-preview">
            <img class="balcon_big_image balcon_big_image--active" src="assets/img/modal_calc/balkon/type1.png" alt="Тип1" />
            <img class="balcon_big_image" src="assets/img/modal_calc/balkon/type2.png" alt="Тип2" />
            <img class="balcon_big_image" src="assets/img/modal_calc/balkon/type3.png" alt="Тип3" />
            <img class="balcon_big_image" src="assets/img/modal_calc/balkon/type4.png" alt="Тип4" />
        </div>
        <div class="balcon_icons">
            <span class="balcon_icons_img tabmarker balcon_icons_img--active">
                <img src="assets/img/modal_calc/balkon/ba_01.png" alt="Тип1" />
            </span>
            <span class="balcon_icons_img tabmarker">
                <img src="assets/img/modal_calc/balkon/ba_02.png" alt="Тип2" />
            </span>
            <span class="balcon_icons_img tabmarker">
                <img src="assets/img/modal_calc/balkon/ba_03.png" alt="Тип3" />
            </span>
            <span class="balcon_icons_img tabmarker">
                <img src="assets/img/modal_calc/balkon/ba_04.png" alt="Тип4" />
            </span>
        </div>
        <div class="big_img text-center">
            <img src="assets/img/modal_calc/balkon/type1.png" alt="Тип1" />
            <img src="assets/img/modal_calc/balkon/type2.png" alt="Тип2" />
            <img src="assets/img/modal_calc/balkon/type3.png" alt="Тип3" />
            <img src="assets/img/modal_calc/balkon/type4.png" alt="Тип4" />
        </div>
        <input class="form-control" id="width" type="text"  required placeholder="Ширина" required />
        <label for="width">мм</label>
        <div class="multiplication"><strong>&times;</strong></div>
        <input class="form-control" id="height" type="text" required placeholder="Высота" required />
        <label for="height">мм</label>
        <button class="button popup_calc_button">Далее</button>
        <div class="error"></div>
    </div>
</div>`;

export const secondCalcMarkUp = `<div class="popup_dialog">
    <div class="popup_calc_profile_content text-center">
        <button type="button" class="popup_close"><strong>&times;</strong></button>
        <h2>Калькулятор</h2>
        <h3>
            Выберите тип остекления
            <br />
            и его профиль
        </h3>
        <select class="form-control" name="view" id="view_type">
            <option value="tree">Деревянное остекление</option>
            <option value="aluminum">Алюминиевое остекление</option>
            <option value="plastic">Остекление пластиковыми рамами</option>
            <option value="french">Панорамное остекление</option>
            <option value="overhang">Остекление с выносом</option>
        </select>
        <img src="assets/img/modal_calc/icon_cold.png" alt="" />
        <label>
            <input class="checkbox" type="checkbox" name="checkbox-test" />
            <span class="checkbox-custom" id="cold"></span>
            <span class="label">Холодное</span>
        </label>
        <img src="assets/img/modal_calc/icon_warm.png" alt="" />
        <label>
            <input class="checkbox" type="checkbox" name="checkbox-test" />
            <span class="checkbox-custom" id="warm"></span>
            <span class="label">Теплое</span>
        </label>

        <button class="button popup_calc_profile_button">Далее</button>
    </div>
</div>`;

export const finalCalcMarkUp = `<div class="popup_dialog">
    <div class="popup_content text-center">
        <button type="button" class="popup_close"><strong>&times;</strong></button>
        <div class="popup_form">
            <form class="form" action="#">
            <h2>
            Запишитесь сегодня на
            <br />
            <span>бесплатный замер</span>
        </h2>
        <div class="form__input-box">
            <!-- <label for="user_name"></label> -->
            <input class="form-control form_input" id="user_name" name="user_name" type="text" placeholder="Введите ваше имя" />
            <div class="error"></div>
        </div>
        <div class="form__input-box">
            <input class="form-control form_input" id="user_phone" name="user_phone" type="phone" placeholder="Введите телефон" />
            <div class="error"></div>
        </div>

        <button class="text-uppercase btn-block button" name="submit" type="submit">Вызвать замерщика!</button>
        <p class="form_notice">Ваши данные конфиденциальны</p>
            </form>
        </div>
    </div>
</div>
</div>`;
