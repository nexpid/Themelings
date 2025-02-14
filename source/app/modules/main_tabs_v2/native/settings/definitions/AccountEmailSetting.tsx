// app/modules/main_tabs_v2/native/settings/definitions/AccountEmailSetting.tsx
export default (function(_, argBar, argBaz, __, ___, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    mike = {};
    tango = true;
    mike['value'] = tango;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = options.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    options = mike.MobileSetting;
    mike = {};
    verify = 2;
    verify = oscar[verify];
    verify = report.bind(entity)(verify);
    verify = verify.RendererType;
    verify = verify.PRESSABLE;
    mike['type'] = verify;
    verify = function() { // Original name: title
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 5;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.w/qqKC;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['title'] = verify;
    options = options.ACCOUNT;
    mike['parent'] = options;
    options = function() { // Original name: useAccountEmailSettingTrailing
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        mike = 3;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        entity = _closure1_slot3;
        mike = new Array(1);
        mike[0] = entity;
        entity = function() {
            _fun94464: for(var _fun94464_ip = 0; ; ) switch(_fun94464_ip) {
 0:
                mike = _closure1_slot3;
                entity = mike.getCurrentUser;
                mike = entity.bind(mike)();
                entity = null;
                zulu = entity == mike;
                entity = undefined;
                if(zulu) { _fun94464_ip = 33; continue _fun94464 }
 27:
                entity = mike.email;
 33:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike['useTrailing'] = options;
    golf = function() { // Original name: onAccountEmailSettingPress
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.open;
        mike = true;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['onPress'] = golf;
    mike['withArrow'] = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/definitions/AccountEmailSetting.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();