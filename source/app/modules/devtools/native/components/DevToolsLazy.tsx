// app/modules/devtools/native/components/DevToolsLazy.tsx
export default (function(_, argBar, argBaz, argCorge, __, argFred, argPlugh) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        report = argBar;
        verify = argBaz;
        zulu = argFred;
        oscar = argPlugh;
        var _closure1_slot0 = report;
        var _closure1_slot1 = oscar;
        entity = global;
        options = entity.Object;
        golf = options.defineProperty;
        tango = {};
        entity = true;
        tango['value'] = entity;
        entity = '__esModule';
        entity = golf.bind(options)(zulu, entity, tango);
        entity = 0;
        tango = oscar[entity];
        entity = undefined;
        tango = verify.bind(entity)(tango);
        var _closure1_slot2 = tango;
        tango = 1;
        golf = oscar[tango];
        tango = argCorge;
        tango = tango.bind(entity)(golf);
        var _closure1_slot3 = tango;
        tango = 2;
        tango = oscar[tango];
        tango = report.bind(entity)(tango);
        tango = tango.NativeModules;
        var _closure1_slot4 = tango;
        golf = 3;
        golf = oscar[golf];
        golf = verify.bind(entity)(golf);
        var _closure1_slot5 = golf;
        golf = 4;
        golf = oscar[golf];
        golf = verify.bind(entity)(golf);
        var _closure1_slot6 = golf;
        golf = 5;
        golf = oscar[golf];
        golf = report.bind(entity)(golf);
        golf = golf.jsx;
        var _closure1_slot7 = golf;
        golf = {'input': 'o', 'modifierFlags': null, 'eventName': 'keyCommandShowDevTools', 'discoverabilityTitle': 'Open DevTools Panel'};
        options = 6;
        options = oscar[options];
        offset = report.bind(entity)(options);
        options = offset.isAndroid;
        options = options.bind(offset)();
        if(options) { _fun00002_ip = 217; continue _fun00001 }
 203:
        tango = tango.KeyCommandsView;
        tango = tango.keyModifierControl;
        _fun00002_ip = 245; continue _fun00001;
 217:
        options = 7;
        options = oscar[options];
        verify = verify.bind(entity)(options);
        options = verify.getConstants;
        options = options.bind(verify)();
        tango = options.keyModifierControl;
 245:
        golf['modifierFlags'] = tango;
        tango = function() { // Original name: onKeyCommand
            zulu = _closure1_slot2;
            mike = undefined;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun00004_ip = 76; continue _fun00003 }
 7:
                        report = _closure1_slot0;
                        mike = _closure1_slot1;
                        zulu = 9;
                        tango = mike[zulu];
                        zulu = undefined;
                        report = report.bind(zulu)(tango);
                        tango = 8;
                        tango = mike[tango];
                        mike = mike.paths;
                        mike = report.bind(zulu)(tango, mike);
                        SaveGenerator(address=54);
 52:
                        return mike;
 54:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tango) { _fun00004_ip = 73; continue _fun00003 }
 60:
                        tango = mike.navigateToDevTools;
                        tango = tango.bind(zulu)();
                        return zulu;
 73:
                        return mike;
 76:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zulu.bind(mike)(entity);
            entity = entity.bind(mike)();
            return entity;
        };
        golf['onKeyCommand'] = tango;
        tango = new Array(1);
        tango[0] = golf;
        var _closure1_slot8 = tango;
        tango = 13;
        tango = oscar[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.fileFinishedImporting;
        tango = 'modules/devtools/native/components/DevToolsLazy.tsx';
        tango = report.bind(oscar)(tango);
        mike = function() { // Original name: DevToolsLazy
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                oscar = _closure1_slot0;
                golf = _closure1_slot1;
                mike = 10;
                zulu = golf[mike];
                tango = undefined;
                offset = oscar.bind(tango)(zulu);
                verify = offset.useStateFromStores;
                zulu = _closure1_slot5;
                options = new Array(1);
                options[0] = zulu;
                zulu = function() {
                    entity = _closure1_slot5;
                    entity = entity.isDeveloper;
                    return entity;
                };
                zulu = verify.bind(offset)(options, zulu);
                var _closure2_slot0 = zulu;
                mike = golf[mike];
                offset = oscar.bind(tango)(mike);
                verify = offset.useStateFromStores;
                mike = _closure1_slot6;
                options = new Array(1);
                options[0] = mike;
                mike = function() {
                    entity = _closure1_slot6;
                    entity = entity.showDevWidget;
                    return entity;
                };
                mike = verify.bind(offset)(options, mike);
                verify = _closure1_slot3;
                options = verify.useEffect;
                report = function() {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        tango = _closure1_slot0;
                        zulu = _closure1_slot1;
                        entity = 6;
                        zulu = zulu[entity];
                        entity = undefined;
                        tango = tango.bind(entity)(zulu);
                        zulu = tango.isIOS;
                        zulu = zulu.bind(tango)();
                        if(!zulu) { _fun00008_ip = 62; continue _fun00007 }
 38:
                        tango = _closure1_slot5;
                        zulu = tango.addChangeListener;
                        mike = function() {
                            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                entity = _closure1_slot4;
                                zulu = entity.NSUserDefaultsBridge;
                                entity = null;
                                if(!(entity != zulu)) { _fun00010_ip = 39; continue _fun00009 }
 19:
                                mike = zulu.setIsDiscordDeveloper;
                                entity = _closure2_slot0;
                                entity = mike.bind(zulu)(entity);
 39:
                                entity = undefined;
                                return entity;
                            }
                        };
                        mike = zulu.bind(tango)(mike);
 62:
                        return entity;
                    }
                };
                report = options.bind(verify)(report);
                report = 11;
                report = golf[report];
                golf = oscar.bind(tango)(report);
                oscar = golf.useKeyCommands;
                if(zulu) { _fun00006_ip = 148; continue _fun00005 }
 142:
                report = new Array(0);
                _fun00006_ip = 152; continue _fun00005;
 148:
                report = _closure1_slot8;
 152:
                report = oscar.bind(golf)(report);
                if(!zulu) { _fun00006_ip = 163; continue _fun00005 }
 160:
                if(mike) { _fun00006_ip = 167; continue _fun00005 }
 163:
                mike = null;
                return mike;
 167:
                zulu = _closure1_slot0;
                report = _closure1_slot1;
                mike = 12;
                mike = report[mike];
                mike = zulu.bind(tango)(mike);
                zulu = mike.default;
                mike = _closure1_slot7;
                entity = {};
                entity = mike.bind(tango)(zulu, entity);
                return entity;
            }
        };
        zulu['default'] = mike;
        return entity;
    }
})();