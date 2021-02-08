    var initialized = false, // SDK загружено
        loggedIn = false, // пользователь авторизован
        connected = false, // получено соединение с VoxImplant сервером
        voxImplant = VoxImplant.getInstance();

    // добавляем прослушивателей основных событий
    // событие загрузки SDK
    voxImplant.addEventListener(VoxImplant.Events.SDKReady, handleSDKReady);
    // событие установки соединения с сервером VoxImplant
    voxImplant.addEventListener(VoxImplant.Events.ConnectionEstablished, handleConnectionEstablished);
    // событие авторизации пользователя на сервере VoxImplant
    voxImplant.addEventListener(VoxImplant.Events.AuthResult, handleAuthResult);

    // SDK загружен, соединяемся с VoxImplant сервером
    function handleSDKReady() {
        initialized = true;
        voxImplant.connect();
    }

    // соединились с VoxImplant сервером успешно, авторизуем юзера
    function handleConnectionEstablished() {
        connected = true;
        login();
    }

    // проверяем статус авторизации
    function handleAuthResult(e) {
        if (e.result) {
            // Авторизовались успешно
            loggedIn = true;
            makeCall();
        }
    }

    // проводим авторизацию
    function login(){
        // данные созданного пользователя и приложения
        voxImplant.login("user@application_url", "user_password");
    }

    function makeCall(){
        var call = voxImplant.call("phone_number"); // ваш номер для дозвона
    }

    function testCall() {
        // если SDK не инициализирован - проводим процесс
        if (!initialized) voxImplant.init();
        else {
            // если не установлено соединение с сервером VoxImplant - устанавливаем
            if (!voxImplant.connected()) voxImplant.connect();
            else {
                // если юзер не авторизован - авторизуем, если авторизован - звоним
                if (!loggedIn) login();
                else makeCall();
            }
        }
    }