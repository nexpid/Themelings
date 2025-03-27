// app/lib/web/AppWindowContext.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    verify = argBar;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = offset;
    report = function(argFoo) { // Original name: getWindowDispatchForElement
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            entity = entity.ownerDocument;
            oscard = entity.defaultView;
            zuuluu = null;
            if(!(zuuluu == oscard)) { _fun00002_ip = 25; continue _fun00001 }
 21:
            entity = undefined;
            return entity;
 25:
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            entity = 5;
            tangon = tangon[entity];
            entity = undefined;
            report = report.bind(entity)(tangon);
            tangon = report.getWindowId;
            report = tangon.bind(report)(oscard);
            tangon = _closure1_slot6;
            michal = tangon.get;
            michal = michal.bind(tangon)(report);
            zuuluu = zuuluu == michal;
            if(zuuluu) { _fun00002_ip = 88; continue _fun00001 }
 82:
            entity = michal.windowDispatch;
 88:
            return entity;
        }
    };
    var _closure1_slot7 = report;
    tangon = function() { // Original name: getCurrentlyInteractingAppWindowContext
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 7;
            michal = michal[entity];
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            entity = michal.getCurrentlyInteractingWindowId;
            report = entity.bind(michal)();
            michal = null;
            tangon = michal == report;
            entity = null;
            if(tangon) { _fun00004_ip = 75; continue _fun00003 }
 46:
            tangon = _closure1_slot6;
            zuuluu = tangon.get;
            zuuluu = zuuluu.bind(tangon)(report);
            tangon = michal != zuuluu;
            michal = null;
            if(!tangon) { _fun00004_ip = 72; continue _fun00003 }
 69:
            michal = zuuluu;
 72:
            entity = michal;
 75:
            return entity;
        }
    };
    var _closure1_slot8 = tangon;
    option = global;
    yankee = option.Object;
    golfie = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    golfie = offset[entity];
    oscard = argBaz;
    entity = undefined;
    oscard = oscard.bind(entity)(golfie);
    var _closure1_slot2 = oscard;
    oscard = 1;
    golfie = offset[oscard];
    oscard = argCor;
    romeon = oscard.bind(entity)(golfie);
    var _closure1_slot3 = romeon;
    oscard = 2;
    oscard = offset[oscard];
    oscard = verify.bind(entity)(oscard);
    foxtra = oscard.AppContext;
    oscard = 3;
    oscard = offset[oscard];
    oscard = verify.bind(entity)(oscard);
    oscard = oscard.jsx;
    var _closure1_slot4 = oscard;
    oscard = 4;
    oscard = offset[oscard];
    oscard = verify.bind(entity)(oscard);
    oscard = oscard.ComponentDispatcher;
    golfie = oscard.prototype;
    golfie = Object.create(golfie, {constructor: {value: oscard}});
    result = golfie;
    oscard = new result[oscard](output);
    oscard = oscard instanceof Object ? oscard : golfie;
    yankee = romeon.createContext;
    golfie = {};
    foxtra = foxtra.APP;
    golfie['appContext'] = foxtra;
    foxtra = option.window;
    golfie['renderWindow'] = foxtra;
    golfie['windowDispatch'] = oscard;
    foxtra = 5;
    foxtra = offset[foxtra];
    backup = verify.bind(entity)(foxtra);
    foxtra = backup.getMainWindowId;
    foxtra = foxtra.bind(backup)();
    golfie['windowId'] = foxtra;
    golfie = yankee.bind(romeon)(golfie);
    var _closure1_slot5 = golfie;
    option = option.Map;
    yankee = option.prototype;
    yankee = Object.create(yankee, {constructor: {value: option}});
    result = yankee;
    option = new result[option](output);
    option = option instanceof Object ? option : yankee;
    var _closure1_slot6 = option;
    option = 8;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'lib/web/AppWindowContext.tsx';
    option = verify.bind(offset)(option);
    zuuluu['default'] = golfie;
    zuuluu['MainWindowDispatch'] = oscard;
    zuuluu['getWindowDispatchForElement'] = report;
    report = function(argFoo) { // Original name: getWindowDispatchForEvent
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            entity = 6;
            entity = report[entity];
            report = undefined;
            golfie = tangon.bind(report)(entity);
            oscard = golfie.isElement;
            tangon = null;
            option = tangon == michal;
            entity = undefined;
            if(option) { _fun00006_ip = 51; continue _fun00005 }
 45:
            entity = michal.target;
 51:
            oscard = oscard.bind(golfie)(entity);
            entity = null;
            if(!oscard) { _fun00006_ip = 88; continue _fun00005 }
 61:
            zuuluu = _closure1_slot7;
            michal = michal.target;
            michal = zuuluu.bind(report)(michal);
            zuuluu = tangon != michal;
            entity = null;
            if(!zuuluu) { _fun00006_ip = 88; continue _fun00005 }
 85:
            entity = michal;
 88:
            return entity;
        }
    };
    zuuluu['getWindowDispatchForEvent'] = report;
    zuuluu['getCurrentlyInteractingAppWindowContext'] = tangon;
    tangon = function(argFoo) { // Original name: getAppWindowContextValue
        zuuluu = _closure1_slot6;
        michal = zuuluu.get;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['getAppWindowContextValue'] = tangon;
    tangon = function() { // Original name: getCurrentlyInteractingAppContext
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = _closure1_slot8;
            entity = undefined;
            michal = michal.bind(entity)();
            entity = null;
            zuuluu = entity != michal;
            if(!zuuluu) { _fun00008_ip = 28; continue _fun00007 }
 22:
            entity = michal.appContext;
 28:
            return entity;
        }
    };
    zuuluu['getCurrentlyInteractingAppContext'] = tangon;
    tangon = function(argFoo) { // Original name: AppWindowContextProvider
        entity = argFoo;
        zuuluu = entity.appContext;
        michal = entity.renderWindow;
        report = entity.children;
        entity = function(argFoo, argBar) { // Original name: useWindowContextValue
            option = argFoo;
            golfie = argBar;
            var _closure3_slot0 = option;
            var _closure3_slot1 = golfie;
            report = _closure1_slot3;
            tangon = report.useState;
            verify = _closure1_slot0;
            oscard = _closure1_slot1;
            zuuluu = 5;
            zuuluu = oscard[zuuluu];
            oscard = undefined;
            verify = verify.bind(oscard)(zuuluu);
            zuuluu = verify.getWindowId;
            zuuluu = zuuluu.bind(verify)(golfie);
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = _closure1_slot2;
            entity = 2;
            zuuluu = zuuluu.bind(oscard)(tangon, entity);
            entity = 0;
            oscard = zuuluu[entity];
            var _closure3_slot2 = oscard;
            entity = 1;
            entity = zuuluu[entity];
            var _closure3_slot3 = entity;
            tangon = report.useMemo;
            zuuluu = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 4;
                michal = michal[entity];
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                entity = entity.ComponentDispatcher;
                michal = entity.prototype;
                michal = Object.create(michal, {constructor: {value: entity}});
                report = michal;
                entity = new report[entity](tangon);
                entity = entity instanceof Object ? entity : michal;
                return entity;
            };
            entity = new Array(0);
            entity = tangon.bind(report)(zuuluu, entity);
            var _closure3_slot4 = entity;
            tangon = report.useMemo;
            zuuluu = new Array(4);
            zuuluu[0] = option;
            zuuluu[1] = golfie;
            zuuluu[2] = entity;
            zuuluu[3] = oscard;
            entity = function() {
                entity = {};
                zuuluu = _closure3_slot0;
                entity['appContext'] = zuuluu;
                zuuluu = _closure3_slot1;
                entity['renderWindow'] = zuuluu;
                zuuluu = _closure3_slot4;
                entity['windowDispatch'] = zuuluu;
                michal = _closure3_slot2;
                entity['windowId'] = michal;
                return entity;
            };
            entity = tangon.bind(report)(entity, zuuluu);
            var _closure3_slot5 = entity;
            option = report.useEffect;
            tangon = new Array(2);
            tangon[0] = golfie;
            tangon[1] = oscard;
            zuuluu = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure3_slot2;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00010_ip = 19; continue _fun00009 }
 15:
                    michal = undefined;
                    return michal;
 19:
                    michal = global;
                    report = michal.setInterval;
                    tangon = undefined;
                    zuuluu = function() {
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot1;
                            entity = 5;
                            michal = michal[entity];
                            entity = undefined;
                            report = zuuluu.bind(entity)(michal);
                            tangon = report.getWindowId;
                            zuuluu = _closure3_slot1;
                            zuuluu = tangon.bind(report)(zuuluu);
                            tangon = null;
                            if(!(tangon != zuuluu)) { _fun00012_ip = 78; continue _fun00011 }
 49:
                            michal = _closure3_slot3;
                            michal = michal.bind(entity)(zuuluu);
                            michal = global;
                            zuuluu = michal.clearInterval;
                            michal = _closure4_slot0;
                            michal = zuuluu.bind(entity)(michal);
 78:
                            return entity;
                        }
                    };
                    michal = 10;
                    michal = report.bind(tangon)(zuuluu, michal);
                    var _closure4_slot0 = michal;
                    entity = function() {
                        entity = global;
                        zuuluu = entity.clearInterval;
                        michal = _closure4_slot0;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    return entity;
                }
            };
            zuuluu = option.bind(report)(zuuluu, tangon);
            tangon = report.useEffect;
            zuuluu = new Array(3);
            zuuluu[0] = entity;
            zuuluu[1] = golfie;
            zuuluu[2] = oscard;
            michal = function() {
                oscard = _closure1_slot6;
                report = oscard.set;
                tangon = _closure3_slot2;
                zuuluu = _closure3_slot5;
                zuuluu = report.bind(oscard)(tangon, zuuluu);
                report = function() { // Original name: handleUnload
                    zuuluu = _closure1_slot6;
                    michal = zuuluu.delete;
                    entity = _closure3_slot2;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                var _closure4_slot0 = report;
                tangon = _closure3_slot1;
                zuuluu = tangon.addEventListener;
                michal = 'unload';
                michal = zuuluu.bind(tangon)(michal, report);
                entity = function() {
                    tangon = _closure3_slot1;
                    zuuluu = tangon.removeEventListener;
                    michal = _closure4_slot0;
                    entity = 'unload';
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                return entity;
            };
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        };
        tangon = undefined;
        oscard = entity.bind(tangon)(zuuluu, michal);
        zuuluu = _closure1_slot4;
        entity = _closure1_slot5;
        michal = entity.Provider;
        entity = {};
        entity['value'] = oscard;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['AppWindowContextProvider'] = tangon;
    tangon = function() { // Original name: useAppContext
        zuuluu = _closure1_slot3;
        michal = zuuluu.useContext;
        entity = _closure1_slot5;
        entity = michal.bind(zuuluu)(entity);
        entity = entity.appContext;
        return entity;
    };
    zuuluu['useAppContext'] = tangon;
    michal = function() { // Original name: useWindowDispatch
        zuuluu = _closure1_slot3;
        michal = zuuluu.useContext;
        entity = _closure1_slot5;
        entity = michal.bind(zuuluu)(entity);
        entity = entity.windowDispatch;
        return entity;
    };
    zuuluu['useWindowDispatch'] = michal;
    return entity;
})();