// app/modules/messages/useOnMessageSend.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
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
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.MessageStates;
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/useOnMessageSend.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useOnMessageSend
        _fun118412: for(var _fun118412_ip = 0; ; ) switch(_fun118412_ip) {
 0:
            golf = argFoo;
            oscar = arguments[1];
            var _closure2_slot0 = golf;
            entity = undefined;
            if(!(oscar === entity)) { _fun118412_ip = 20; continue _fun118412 }
 18:
            oscar = undefined;
 20:
            var _closure2_slot1 = oscar;
            report = _closure1_slot2;
            tango = report.useEffect;
            zulu = new Array(2);
            zulu[0] = golf;
            zulu[1] = oscar;
            mike = function() {
                report = function(argFoo) { // Original name: handleMessage
                    _fun118414: for(var _fun118414_ip = 0; ; ) switch(_fun118414_ip) {
 0:
                        zulu = _closure2_slot1;
                        entity = undefined;
                        zulu = entity !== zulu;
                        if(!zulu) { _fun118414_ip = 32; continue _fun118414 }
 16:
                        tango = argFoo;
                        report = tango.channelId;
                        tango = _closure2_slot1;
                        zulu = report !== tango;
 32:
                        if(zulu) { _fun118414_ip = 43; continue _fun118414 }
 35:
                        mike = _closure2_slot0;
                        mike = mike.bind(entity)();
 43:
                        return entity;
                    }
                };
                var _closure3_slot0 = report;
                offset = function(argFoo) { // Original name: handleMessageCreate
                    _fun118415: for(var _fun118415_ip = 0; ; ) switch(_fun118415_ip) {
 0:
                        zulu = argFoo;
                        entity = zulu.optimistic;
                        if(entity) { _fun118415_ip = 39; continue _fun118415 }
 12:
                        mike = zulu.message;
                        tango = mike.state;
                        mike = _closure1_slot3;
                        mike = mike.SENDING;
                        entity = tango === mike;
 39:
                        if(!entity) { _fun118415_ip = 56; continue _fun118415 }
 42:
                        mike = _closure3_slot0;
                        entity = undefined;
                        entity = mike.bind(entity)(zulu);
 56:
                        entity = undefined;
                        return entity;
                    }
                };
                var _closure3_slot1 = offset;
                tango = _closure1_slot0;
                oscar = _closure1_slot1;
                mike = 2;
                golf = oscar[mike];
                zulu = undefined;
                verify = tango.bind(zulu)(golf);
                options = verify.subscribe;
                golf = 'MESSAGE_CREATE';
                golf = options.bind(verify)(golf, offset);
                golf = oscar[mike];
                verify = tango.bind(zulu)(golf);
                options = verify.subscribe;
                golf = 'UPLOAD_START';
                golf = options.bind(verify)(golf, report);
                mike = oscar[mike];
                tango = tango.bind(zulu)(mike);
                zulu = tango.subscribe;
                mike = 'CALL_CREATE';
                mike = zulu.bind(tango)(mike, report);
                entity = function() {
                    zulu = _closure1_slot0;
                    tango = _closure1_slot1;
                    mike = 2;
                    report = tango[mike];
                    entity = undefined;
                    verify = zulu.bind(entity)(report);
                    options = verify.unsubscribe;
                    golf = _closure3_slot1;
                    oscar = 'MESSAGE_CREATE';
                    oscar = options.bind(verify)(oscar, golf);
                    oscar = tango[mike];
                    options = zulu.bind(entity)(oscar);
                    golf = options.unsubscribe;
                    report = _closure3_slot0;
                    oscar = 'UPLOAD_START';
                    oscar = golf.bind(options)(oscar, report);
                    mike = tango[mike];
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.unsubscribe;
                    mike = 'CALL_CREATE';
                    mike = zulu.bind(tango)(mike, report);
                    return entity;
                };
                return entity;
            };
            mike = tango.bind(report)(mike, zulu);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();