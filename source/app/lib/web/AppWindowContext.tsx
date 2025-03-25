// app/lib/web/AppWindowContext.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
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
            entity = 4;
            tangon = tangon[entity];
            entity = undefined;
            report = report.bind(entity)(tangon);
            tangon = report.getWindowId;
            report = tangon.bind(report)(oscard);
            tangon = _closure1_slot5;
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
    var _closure1_slot6 = report;
    tangon = function() { // Original name: getCurrentlyInteractingAppWindowContext
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 6;
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
            tangon = _closure1_slot5;
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
    var _closure1_slot7 = tangon;
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
    oscard = argCor;
    entity = undefined;
    romeon = oscard.bind(entity)(golfie);
    var _closure1_slot2 = romeon;
    oscard = 1;
    oscard = offset[oscard];
    oscard = verify.bind(entity)(oscard);
    foxtra = oscard.AppContext;
    oscard = 2;
    oscard = offset[oscard];
    oscard = verify.bind(entity)(oscard);
    oscard = oscard.jsx;
    var _closure1_slot3 = oscard;
    oscard = 3;
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
    foxtra = 4;
    foxtra = offset[foxtra];
    backup = verify.bind(entity)(foxtra);
    foxtra = backup.getMainWindowId;
    foxtra = foxtra.bind(backup)();
    golfie['windowId'] = foxtra;
    golfie = yankee.bind(romeon)(golfie);
    var _closure1_slot4 = golfie;
    option = option.Map;
    yankee = option.prototype;
    yankee = Object.create(yankee, {constructor: {value: option}});
    result = yankee;
    option = new result[option](output);
    option = option instanceof Object ? option : yankee;
    var _closure1_slot5 = option;
    option = 7;
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
            entity = 5;
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
            zuuluu = _closure1_slot6;
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
        zuuluu = _closure1_slot5;
        michal = zuuluu.get;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['getAppWindowContextValue'] = tangon;
    tangon = function() { // Original name: getCurrentlyInteractingAppContext
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = _closure1_slot7;
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
        entity = function(argFoo, argBar) { // Original name: getWindowContextValue
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                oscard = argBar;
                michal = _closure1_slot0;
                report = _closure1_slot1;
                entity = 4;
                entity = report[entity];
                verify = undefined;
                michal = michal.bind(verify)(entity);
                entity = michal.getWindowId;
                golfie = entity.bind(michal)(oscard);
                var _closure3_slot0 = golfie;
                michal = _closure1_slot5;
                entity = michal.get;
                entity = entity.bind(michal)(golfie);
                michal = null;
                if(!(michal == entity)) { _fun00010_ip = 177; continue _fun00009 }
 65:
                michal = {};
                report = argFoo;
                michal['appContext'] = report;
                michal['renderWindow'] = oscard;
                option = _closure1_slot0;
                offset = _closure1_slot1;
                report = 3;
                report = offset[report];
                report = option.bind(verify)(report);
                report = report.ComponentDispatcher;
                option = report.prototype;
                option = Object.create(option, {constructor: {value: report}});
                foxtra = option;
                report = new foxtra[report](romeon);
                report = report instanceof Object ? report : option;
                michal['windowDispatch'] = report;
                michal['windowId'] = golfie;
                report = _closure1_slot5;
                tangon = report.set;
                tangon = tangon.bind(report)(golfie, michal);
                report = oscard.addEventListener;
                tangon = 'unload';
                zuuluu = function() {
                    zuuluu = _closure1_slot5;
                    michal = zuuluu.delete;
                    entity = _closure3_slot0;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                zuuluu = report.bind(oscard)(tangon, zuuluu);
                entity = michal;
 177:
                return entity;
            }
        };
        tangon = undefined;
        oscard = entity.bind(tangon)(zuuluu, michal);
        zuuluu = _closure1_slot3;
        entity = _closure1_slot4;
        michal = entity.Provider;
        entity = {};
        entity['value'] = oscard;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['AppWindowContextProvider'] = tangon;
    tangon = function() { // Original name: useAppContext
        zuuluu = _closure1_slot2;
        michal = zuuluu.useContext;
        entity = _closure1_slot4;
        entity = michal.bind(zuuluu)(entity);
        entity = entity.appContext;
        return entity;
    };
    zuuluu['useAppContext'] = tangon;
    michal = function() { // Original name: useWindowDispatch
        zuuluu = _closure1_slot2;
        michal = zuuluu.useContext;
        entity = _closure1_slot4;
        entity = michal.bind(zuuluu)(entity);
        entity = entity.windowDispatch;
        return entity;
    };
    zuuluu['useWindowDispatch'] = michal;
    return entity;
})();