// app/modules/devtools/native/components/DevToolsLazy.tsx
export default (function(_, argBar, argBaz, argCor, __, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        report = argBar;
        verify = argBaz;
        zuuluu = argFre;
        oscard = argPlu;
        var _closure1_slot0 = report;
        var _closure1_slot1 = oscard;
        entity = global;
        option = entity.Object;
        golfie = option.defineProperty;
        tangon = {};
        entity = true;
        tangon['value'] = entity;
        entity = '__esModule';
        entity = golfie.bind(option)(zuuluu, entity, tangon);
        entity = 0;
        tangon = oscard[entity];
        entity = undefined;
        tangon = verify.bind(entity)(tangon);
        var _closure1_slot2 = tangon;
        tangon = 1;
        golfie = oscard[tangon];
        tangon = argCor;
        tangon = tangon.bind(entity)(golfie);
        var _closure1_slot3 = tangon;
        tangon = 2;
        tangon = oscard[tangon];
        tangon = report.bind(entity)(tangon);
        tangon = tangon.NativeModules;
        var _closure1_slot4 = tangon;
        golfie = 3;
        golfie = oscard[golfie];
        golfie = verify.bind(entity)(golfie);
        var _closure1_slot5 = golfie;
        golfie = 4;
        golfie = oscard[golfie];
        golfie = verify.bind(entity)(golfie);
        var _closure1_slot6 = golfie;
        golfie = 5;
        golfie = oscard[golfie];
        golfie = report.bind(entity)(golfie);
        golfie = golfie.jsx;
        var _closure1_slot7 = golfie;
        golfie = {'input': 'o', 'modifierFlags': null, 'eventName': 'keyCommandShowDevTools', 'discoverabilityTitle': 'Open DevTools Panel'};
        option = 6;
        option = oscard[option];
        offset = report.bind(entity)(option);
        option = offset.isAndroid;
        option = option.bind(offset)();
        if(option) { _fun00002_ip = 217; continue _fun00001 }
 203:
        tangon = tangon.KeyCommandsView;
        tangon = tangon.keyModifierControl;
        _fun00002_ip = 245; continue _fun00001;
 217:
        option = 7;
        option = oscard[option];
        verify = verify.bind(entity)(option);
        option = verify.getConstants;
        option = option.bind(verify)();
        tangon = option.keyModifierControl;
 245:
        golfie['modifierFlags'] = tangon;
        tangon = function() { // Original name: onKeyCommand
            zuuluu = _closure1_slot2;
            michal = undefined;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00004_ip = 76; continue _fun00003 }
 7:
                        report = _closure1_slot0;
                        michal = _closure1_slot1;
                        zuuluu = 9;
                        tangon = michal[zuuluu];
                        zuuluu = undefined;
                        report = report.bind(zuuluu)(tangon);
                        tangon = 8;
                        tangon = michal[tangon];
                        michal = michal.paths;
                        michal = report.bind(zuuluu)(tangon, michal);
                        SaveGenerator(address=54);
 52:
                        return michal;
 54:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tangon) { _fun00004_ip = 73; continue _fun00003 }
 60:
                        tangon = michal.navigateToDevTools;
                        tangon = tangon.bind(zuuluu)();
                        return zuuluu;
 73:
                        return michal;
 76:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zuuluu.bind(michal)(entity);
            entity = entity.bind(michal)();
            return entity;
        };
        golfie['onKeyCommand'] = tangon;
        tangon = new Array(1);
        tangon[0] = golfie;
        var _closure1_slot8 = tangon;
        tangon = 13;
        tangon = oscard[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.fileFinishedImporting;
        tangon = 'modules/devtools/native/components/DevToolsLazy.tsx';
        tangon = report.bind(oscard)(tangon);
        michal = function() { // Original name: DevToolsLazy
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                oscard = _closure1_slot0;
                golfie = _closure1_slot1;
                michal = 10;
                zuuluu = golfie[michal];
                tangon = undefined;
                offset = oscard.bind(tangon)(zuuluu);
                verify = offset.useStateFromStores;
                zuuluu = _closure1_slot5;
                option = new Array(1);
                option[0] = zuuluu;
                zuuluu = function() {
                    entity = _closure1_slot5;
                    entity = entity.isDeveloper;
                    return entity;
                };
                zuuluu = verify.bind(offset)(option, zuuluu);
                var _closure2_slot0 = zuuluu;
                michal = golfie[michal];
                offset = oscard.bind(tangon)(michal);
                verify = offset.useStateFromStores;
                michal = _closure1_slot6;
                option = new Array(1);
                option[0] = michal;
                michal = function() {
                    entity = _closure1_slot6;
                    entity = entity.showDevWidget;
                    return entity;
                };
                michal = verify.bind(offset)(option, michal);
                verify = _closure1_slot3;
                option = verify.useEffect;
                report = function() {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot1;
                        entity = 6;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        tangon = tangon.bind(entity)(zuuluu);
                        zuuluu = tangon.isIOS;
                        zuuluu = zuuluu.bind(tangon)();
                        if(!zuuluu) { _fun00008_ip = 62; continue _fun00007 }
 38:
                        tangon = _closure1_slot5;
                        zuuluu = tangon.addChangeListener;
                        michal = function() {
                            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                entity = _closure1_slot4;
                                zuuluu = entity.NSUserDefaultsBridge;
                                entity = null;
                                if(!(entity != zuuluu)) { _fun00010_ip = 39; continue _fun00009 }
 19:
                                michal = zuuluu.setIsDiscordDeveloper;
                                entity = _closure2_slot0;
                                entity = michal.bind(zuuluu)(entity);
 39:
                                entity = undefined;
                                return entity;
                            }
                        };
                        michal = zuuluu.bind(tangon)(michal);
 62:
                        return entity;
                    }
                };
                report = option.bind(verify)(report);
                report = 11;
                report = golfie[report];
                golfie = oscard.bind(tangon)(report);
                oscard = golfie.useKeyCommands;
                if(zuuluu) { _fun00006_ip = 148; continue _fun00005 }
 142:
                report = new Array(0);
                _fun00006_ip = 152; continue _fun00005;
 148:
                report = _closure1_slot8;
 152:
                report = oscard.bind(golfie)(report);
                if(!zuuluu) { _fun00006_ip = 163; continue _fun00005 }
 160:
                if(michal) { _fun00006_ip = 167; continue _fun00005 }
 163:
                michal = null;
                return michal;
 167:
                zuuluu = _closure1_slot0;
                report = _closure1_slot1;
                michal = 12;
                michal = report[michal];
                michal = zuuluu.bind(tangon)(michal);
                zuuluu = michal.default;
                michal = _closure1_slot7;
                entity = {};
                entity = michal.bind(tangon)(zuuluu, entity);
                return entity;
            }
        };
        zuuluu['default'] = michal;
        return entity;
    }
})();