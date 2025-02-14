// app/lib/web/AppWindowContext.tsx
export default (function(argFoo, argBar, _, argCorge, __, argFred, argPlugh) {
    options = argBar;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = verify;
    tango = function() { // Original name: getCurrentlyInteractingAppWindowContext
        _fun62081: for(var _fun62081_ip = 0; ; ) switch(_fun62081_ip) {
 0:
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            mike = tango.bind(entity)(mike);
            entity = mike.getCurrentlyInteractingWindowId;
            report = entity.bind(mike)();
            mike = null;
            tango = mike == report;
            entity = null;
            if(tango) { _fun62081_ip = 75; continue _fun62081 }
 46:
            tango = _closure1_slot5;
            zulu = tango.get;
            zulu = zulu.bind(tango)(report);
            tango = mike != zulu;
            mike = null;
            if(!tango) { _fun62081_ip = 72; continue _fun62081 }
 69:
            mike = zulu;
 72:
            entity = mike;
 75:
            return entity;
        }
    };
    var _closure1_slot6 = tango;
    golf = global;
    offset = golf.Object;
    oscar = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(offset)(zulu, entity, report);
    entity = 0;
    oscar = verify[entity];
    report = argCorge;
    entity = undefined;
    yankee = report.bind(entity)(oscar);
    var _closure1_slot2 = yankee;
    report = 1;
    report = verify[report];
    report = options.bind(entity)(report);
    romeo = report.AppContext;
    report = 2;
    report = verify[report];
    report = options.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot3 = report;
    report = 3;
    report = verify[report];
    report = options.bind(entity)(report);
    report = report.ComponentDispatcher;
    oscar = report.prototype;
    oscar = Object.create(oscar, {constructor: {value: report}});
    output = oscar;
    report = new output[report](sizing);
    report = report instanceof Object ? report : oscar;
    offset = yankee.createContext;
    oscar = {};
    romeo = romeo.APP;
    oscar['appContext'] = romeo;
    romeo = golf.window;
    oscar['renderWindow'] = romeo;
    oscar['windowDispatch'] = report;
    romeo = 4;
    romeo = verify[romeo];
    foxtrot = options.bind(entity)(romeo);
    romeo = foxtrot.getMainWindowId;
    romeo = romeo.bind(foxtrot)();
    oscar['windowId'] = romeo;
    oscar = offset.bind(yankee)(oscar);
    var _closure1_slot4 = oscar;
    golf = golf.Map;
    offset = golf.prototype;
    offset = Object.create(offset, {constructor: {value: golf}});
    output = offset;
    golf = new output[golf](sizing);
    golf = golf instanceof Object ? golf : offset;
    var _closure1_slot5 = golf;
    golf = 6;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'lib/web/AppWindowContext.tsx';
    golf = options.bind(verify)(golf);
    zulu['default'] = oscar;
    zulu['MainWindowDispatch'] = report;
    report = function(argFoo) { // Original name: getWindowDispatchForElement
        _fun62082: for(var _fun62082_ip = 0; ; ) switch(_fun62082_ip) {
 0:
            entity = argFoo;
            entity = entity.ownerDocument;
            oscar = entity.defaultView;
            zulu = null;
            if(!(zulu == oscar)) { _fun62082_ip = 25; continue _fun62082 }
 21:
            entity = undefined;
            return entity;
 25:
            report = _closure1_slot0;
            tango = _closure1_slot1;
            entity = 4;
            tango = tango[entity];
            entity = undefined;
            report = report.bind(entity)(tango);
            tango = report.getWindowId;
            report = tango.bind(report)(oscar);
            tango = _closure1_slot5;
            mike = tango.get;
            mike = mike.bind(tango)(report);
            zulu = zulu == mike;
            if(zulu) { _fun62082_ip = 88; continue _fun62082 }
 82:
            entity = mike.windowDispatch;
 88:
            return entity;
        }
    };
    zulu['getWindowDispatchForElement'] = report;
    zulu['getCurrentlyInteractingAppWindowContext'] = tango;
    tango = function(argFoo) { // Original name: getAppWindowContextValue
        zulu = _closure1_slot5;
        mike = zulu.get;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['getAppWindowContextValue'] = tango;
    tango = function() { // Original name: getCurrentlyInteractingAppContext
        _fun62084: for(var _fun62084_ip = 0; ; ) switch(_fun62084_ip) {
 0:
            mike = _closure1_slot6;
            entity = undefined;
            mike = mike.bind(entity)();
            entity = null;
            zulu = entity != mike;
            if(!zulu) { _fun62084_ip = 28; continue _fun62084 }
 22:
            entity = mike.appContext;
 28:
            return entity;
        }
    };
    zulu['getCurrentlyInteractingAppContext'] = tango;
    tango = function(argFoo) { // Original name: AppWindowContextProvider
        entity = argFoo;
        zulu = entity.appContext;
        mike = entity.renderWindow;
        report = entity.children;
        entity = function(argFoo, argBar) { // Original name: getWindowContextValue
            _fun62086: for(var _fun62086_ip = 0; ; ) switch(_fun62086_ip) {
 0:
                oscar = argBar;
                mike = _closure1_slot0;
                report = _closure1_slot1;
                entity = 4;
                entity = report[entity];
                verify = undefined;
                mike = mike.bind(verify)(entity);
                entity = mike.getWindowId;
                golf = entity.bind(mike)(oscar);
                var _closure3_slot0 = golf;
                mike = _closure1_slot5;
                entity = mike.get;
                entity = entity.bind(mike)(golf);
                mike = null;
                if(!(mike == entity)) { _fun62086_ip = 177; continue _fun62086 }
 65:
                mike = {};
                report = argFoo;
                mike['appContext'] = report;
                mike['renderWindow'] = oscar;
                options = _closure1_slot0;
                offset = _closure1_slot1;
                report = 3;
                report = offset[report];
                report = options.bind(verify)(report);
                report = report.ComponentDispatcher;
                options = report.prototype;
                options = Object.create(options, {constructor: {value: report}});
                foxtrot = options;
                report = new foxtrot[report](romeo);
                report = report instanceof Object ? report : options;
                mike['windowDispatch'] = report;
                mike['windowId'] = golf;
                report = _closure1_slot5;
                tango = report.set;
                tango = tango.bind(report)(golf, mike);
                report = oscar.addEventListener;
                tango = 'unload';
                zulu = function() {
                    zulu = _closure1_slot5;
                    mike = zulu.delete;
                    entity = _closure3_slot0;
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                zulu = report.bind(oscar)(tango, zulu);
                entity = mike;
 177:
                return entity;
            }
        };
        tango = undefined;
        oscar = entity.bind(tango)(zulu, mike);
        zulu = _closure1_slot3;
        entity = _closure1_slot4;
        mike = entity.Provider;
        entity = {};
        entity['value'] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['AppWindowContextProvider'] = tango;
    tango = function() { // Original name: useAppContext
        zulu = _closure1_slot2;
        mike = zulu.useContext;
        entity = _closure1_slot4;
        entity = mike.bind(zulu)(entity);
        entity = entity.appContext;
        return entity;
    };
    zulu['useAppContext'] = tango;
    mike = function() { // Original name: useWindowDispatch
        zulu = _closure1_slot2;
        mike = zulu.useContext;
        entity = _closure1_slot4;
        entity = mike.bind(zulu)(entity);
        entity = entity.windowDispatch;
        return entity;
    };
    zulu['useWindowDispatch'] = mike;
    return entity;
})();