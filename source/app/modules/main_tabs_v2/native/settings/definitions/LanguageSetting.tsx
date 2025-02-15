// app/modules/main_tabs_v2/native/settings/definitions/LanguageSetting.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    tango = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(options)(zulu, entity, mike);
    entity = 0;
    tango = oscar[entity];
    mike = argBaz;
    entity = undefined;
    mike = mike.bind(entity)(tango);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    tango = mike.RendererType;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    options = mike.UserSettingsSections;
    mike = {};
    tango = tango.ROUTE;
    mike['type'] = tango;
    tango = function() { // Original name: title
        report = _closure1_slot0;
        oscar = _closure1_slot1;
        entity = 4;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.IHMsPj;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['title'] = tango;
    tango = null;
    mike['parent'] = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.LanguageIcon;
    mike['IconComponent'] = tango;
    tango = function() { // Original name: useLanguageSettingTrailing
        _fun97584: for(var _fun97584_ip = 0; ; ) switch(_fun97584_ip) {
 0:
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            report = 3;
            oscar = mike[report];
            report = undefined;
            verify = tango.bind(report)(oscar);
            options = verify.useStateFromStores;
            oscar = _closure1_slot2;
            golf = new Array(1);
            golf[0] = oscar;
            oscar = function() {
                entity = _closure1_slot2;
                entity = entity.locale;
                return entity;
            };
            oscar = options.bind(verify)(golf, oscar);
            var _closure2_slot0 = oscar;
            oscar = 4;
            mike = mike[oscar];
            tango = tango.bind(report)(mike);
            mike = tango.getAvailableLocales;
            tango = mike.bind(tango)();
            mike = tango.find;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.value;
                entity = _closure2_slot0;
                entity = mike === entity;
                return entity;
            };
            mike = mike.bind(tango)(entity);
            entity = null;
            tango = entity != mike;
            if(!tango) { _fun97584_ip = 147; continue _fun97584 }
 109:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            zulu = zulu[oscar];
            zulu = tango.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = mike.localizedName;
            entity = zulu.bind(tango)(mike);
 147:
            return entity;
        }
    };
    mike['useTrailing'] = tango;
    tango = {};
    options = options.LOCALE;
    tango['route'] = options;
    golf = function() { // Original name: getComponent
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        entity = entity.default;
        return entity;
    };
    tango['getComponent'] = golf;
    mike['screen'] = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/definitions/LanguageSetting.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();