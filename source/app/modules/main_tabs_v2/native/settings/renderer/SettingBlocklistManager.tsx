// app/modules/main_tabs_v2/native/settings/renderer/SettingBlocklistManager.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    golf = tango.bind(entity)(golf);
    var _closure1_slot3 = golf;
    tango = 2;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = golf.memo;
    mike = function() { // Original name: SettingBlocklistManager
        _fun116612: for(var _fun116612_ip = 0; ; ) switch(_fun116612_ip) {
 0:
            report = _closure1_slot4;
            tango = report.getField;
            entity = 'blocklist';
            backup = tango.bind(report)(entity);
            foxtrot = new Array(0);
            var _closure2_slot0 = foxtrot;
            romeo = new Array(0);
            var _closure2_slot1 = romeo;
            entity = global;
            report = entity.Object;
            tango = report.entries;
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            entity = 3;
            entity = golf[entity];
            yankee = undefined;
            entity = oscar.bind(yankee)(entity);
            entity = entity.SETTING_RENDERER_CONFIG;
            offset = tango.bind(report)(entity);
            entity = offset.length;
            verify = 0;
            tango = verify < entity;
            options = false;
            golf = 2;
            oscar = 1;
            entity = null;
            report = 0;
            if(!tango) { _fun116612_ip = 227; continue _fun116612 }
 113:
            kilo = offset[report];
            tango = _closure1_slot2;
            tango = tango.bind(yankee)(kilo, golf);
            kilo = tango[verify];
            tango = tango[oscar];
            sizing = tango.usePredicate;
            output = entity == sizing;
            tango = undefined;
            if(output) { _fun116612_ip = 154; continue _fun116612 }
 150:
            tango = sizing.bind(yankee)();
 154:
            sizing = options === tango;
            if(!sizing) { _fun116612_ip = 186; continue _fun116612 }
 161:
            tango = backup.has;
            tango = tango.bind(backup)(kilo);
            if(tango) { _fun116612_ip = 186; continue _fun116612 }
 174:
            tango = foxtrot.push;
            tango = tango.bind(foxtrot)(kilo);
            _fun116612_ip = 215; continue _fun116612;
 186:
            tango = !sizing;
            if(sizing) { _fun116612_ip = 202; continue _fun116612 }
 192:
            sizing = backup.has;
            tango = sizing.bind(backup)(kilo);
 202:
            if(!tango) { _fun116612_ip = 215; continue _fun116612 }
 205:
            tango = romeo.push;
            tango = tango.bind(romeo)(kilo);
 215:
            report = report + 1;
            tango = offset.length;
            if(report < tango) { _fun116612_ip = 113; continue _fun116612 }
 227:
            tango = _closure1_slot3;
            zulu = tango.useEffect;
            mike = function() {
                _fun116613: for(var _fun116613_ip = 0; ; ) switch(_fun116613_ip) {
 0:
                    zulu = _closure2_slot0;
                    zulu = zulu.length;
                    tango = 0;
                    if(!(!(zulu > tango))) { _fun116613_ip = 33; continue _fun116613 }
 20:
                    zulu = _closure2_slot1;
                    zulu = zulu.length;
                    if(!(zulu > tango)) { _fun116613_ip = 147; continue _fun116613 }
 33:
                    zulu = _closure1_slot4;
                    report = zulu.getField;
                    tango = 'blocklist';
                    options = report.bind(zulu)(tango);
                    tango = global;
                    tango = tango.Set;
                    report = tango.prototype;
                    report = Object.create(report, {constructor: {value: tango}});
                    verify = report;
                    tango = new verify[tango](options, golf);
                    tango = tango instanceof Object ? tango : report;
                    var _closure3_slot0 = tango;
                    golf = _closure2_slot0;
                    oscar = golf.forEach;
                    report = function(argFoo) {
                        zulu = _closure3_slot0;
                        mike = zulu.add;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    report = oscar.bind(golf)(report);
                    report = _closure2_slot1;
                    mike = report.forEach;
                    entity = function(argFoo) {
                        zulu = _closure3_slot0;
                        mike = zulu.delete;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    entity = mike.bind(report)(entity);
                    mike = zulu.setState;
                    entity = {};
                    entity['blocklist'] = tango;
                    entity = mike.bind(zulu)(entity);
 147:
                    entity = undefined;
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/renderer/SettingBlocklistManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();