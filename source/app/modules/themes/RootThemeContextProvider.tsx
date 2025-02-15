// app/modules/themes/RootThemeContextProvider.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ThemeTypes;
    var _closure1_slot5 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot6 = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/themes/RootThemeContextProvider.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: RootThemeContextProvider
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            report = entity.children;
            golf = _closure1_slot0;
            options = _closure1_slot1;
            oscar = 6;
            mike = options[oscar];
            tango = undefined;
            yankee = golf.bind(tango)(mike);
            offset = yankee.useStateFromStores;
            mike = _closure1_slot4;
            verify = new Array(1);
            verify[0] = mike;
            mike = function() {
                entity = _closure1_slot4;
                entity = entity.theme;
                return entity;
            };
            offset = offset.bind(yankee)(verify, mike);
            mike = options[oscar];
            romeo = golf.bind(tango)(mike);
            yankee = romeo.useStateFromStores;
            mike = _closure1_slot3;
            verify = new Array(1);
            verify[0] = mike;
            mike = function() {
                entity = _closure1_slot3;
                entity = entity.gradientPreset;
                return entity;
            };
            mike = yankee.bind(romeo)(verify, mike);
            oscar = options[oscar];
            options = golf.bind(tango)(oscar);
            golf = options.useStateFromStoresObject;
            verify = _closure1_slot2;
            oscar = new Array(1);
            oscar[0] = verify;
            zulu = function() {
                entity = {};
                mike = _closure1_slot2;
                zulu = mike.saturation;
                entity['saturation'] = zulu;
                mike = mike.contrast;
                entity['contrast'] = mike;
                return entity;
            };
            zulu = golf.bind(options)(oscar, zulu);
            options = zulu.saturation;
            golf = zulu.contrast;
            zulu = null;
            zulu = zulu != mike;
            romeo = 0;
            yankee = 0;
            if(!zulu) { _fun00002_ip = 303; continue _fun00001 }
 172:
            zulu = mike.theme;
            mike = _closure1_slot5;
            mike = mike.LIGHT;
            if(!(zulu !== mike)) { _fun00002_ip = 247; continue _fun00001 }
 192:
            verify = _closure1_slot0;
            foxtrot = _closure1_slot1;
            mike = 7;
            zulu = foxtrot[mike];
            oscar = verify.bind(tango)(zulu);
            zulu = oscar.setThemeFlag;
            mike = foxtrot[mike];
            mike = verify.bind(tango)(mike);
            mike = mike.ThemeContextFlags;
            mike = mike.MOBILE_DARK_GRADIENT_THEME_ENABLED;
            mike = zulu.bind(oscar)(romeo, mike);
            _fun00002_ip = 300; continue _fun00001;
 247:
            foxtrot = _closure1_slot0;
            backup = _closure1_slot1;
            zulu = 7;
            oscar = backup[zulu];
            verify = foxtrot.bind(tango)(oscar);
            oscar = verify.setThemeFlag;
            zulu = backup[zulu];
            zulu = foxtrot.bind(tango)(zulu);
            zulu = zulu.ThemeContextFlags;
            zulu = zulu.MOBILE_LIGHT_GRADIENT_THEME_ENABLED;
            mike = oscar.bind(verify)(romeo, zulu);
 300:
            yankee = mike;
 303:
            mike = 1;
            verify = yankee;
            if(!(mike !== options)) { _fun00002_ip = 366; continue _fun00001 }
 313:
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot1;
            mike = 7;
            zulu = foxtrot[mike];
            oscar = romeo.bind(tango)(zulu);
            zulu = oscar.setThemeFlag;
            mike = foxtrot[mike];
            mike = romeo.bind(tango)(mike);
            mike = mike.ThemeContextFlags;
            mike = mike.REDUCE_SATURATION_ENABLED;
            verify = zulu.bind(oscar)(yankee, mike);
 366:
            mike = _closure1_slot0;
            yankee = _closure1_slot1;
            zulu = 8;
            zulu = yankee[zulu];
            oscar = mike.bind(tango)(zulu);
            zulu = oscar.useDensitySetting;
            oscar = zulu.bind(oscar)();
            zulu = _closure1_slot6;
            entity = 7;
            entity = yankee[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.RootThemeContextProvider;
            entity = {};
            entity['theme'] = offset;
            entity['flags'] = verify;
            entity['saturation'] = options;
            entity['contrast'] = golf;
            entity['density'] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();