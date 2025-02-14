// app/modules/messages/native/renderer/context/JumpContext.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = golf;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    tango = 0;
    options = golf[tango];
    report = argCorge;
    entity = undefined;
    options = report.bind(entity)(options);
    var _closure1_slot2 = options;
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot3 = report;
    report = {};
    report['scrollToMessageId'] = entity;
    report['jumpTargetId'] = entity;
    verify = 2;
    verify = golf[verify];
    verify = oscar.bind(entity)(verify);
    verify = verify.JumpTypes;
    verify = verify.ANIMATED;
    report['jumpType'] = verify;
    report['jumpSequenceId'] = tango;
    tango = false;
    report['minimizeScrolling'] = tango;
    report['focusTargetId'] = entity;
    var _closure1_slot4 = report;
    tango = options.createContext;
    tango = tango.bind(options)(report);
    var _closure1_slot5 = tango;
    report = 4;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/messages/native/renderer/context/JumpContext.tsx';
    report = oscar.bind(golf)(report);
    zulu['JumpContext'] = tango;
    mike = function(argFoo) { // Original name: JumpContextProvider
        _fun69513: for(var _fun69513_ip = 0; ; ) switch(_fun69513_ip) {
 0:
            entity = argFoo;
            mike = entity.value;
            tango = undefined;
            if(!(mike === tango)) { _fun69513_ip = 21; continue _fun69513 }
 14:
            mike = _closure1_slot4;
 21:
            report = entity.children;
            oscar = _closure1_slot2;
            zulu = oscar.useRef;
            oscar = zulu.bind(oscar)(mike);
            zulu = oscar.current;
            zulu = mike === zulu;
            if(zulu) { _fun69513_ip = 86; continue _fun69513 }
 55:
            options = _closure1_slot0;
            verify = _closure1_slot1;
            golf = 3;
            golf = verify[golf];
            options = options.bind(tango)(golf);
            golf = oscar.current;
            zulu = options.bind(tango)(mike, golf);
 86:
            if(zulu) { _fun69513_ip = 95; continue _fun69513 }
 89:
            oscar['current'] = mike;
 95:
            zulu = _closure1_slot3;
            entity = _closure1_slot5;
            mike = entity.Provider;
            entity = {};
            oscar = oscar.current;
            entity['value'] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['JumpContextProvider'] = mike;
    return entity;
})();