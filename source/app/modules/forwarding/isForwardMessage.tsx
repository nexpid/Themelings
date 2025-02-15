// app/modules/forwarding/isForwardMessage.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
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
    tango = report.bind(entity)(tango);
    tango = tango.MessageReferenceTypes;
    var _closure1_slot0 = tango;
    tango = 1;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/forwarding/isForwardMessage.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: isForwardMessage
        _fun61121: for(var _fun61121_ip = 0; ; ) switch(_fun61121_ip) {
 0:
            entity = argFoo;
            entity = entity.messageReference;
            mike = null;
            zulu = mike == entity;
            mike = undefined;
            if(zulu) { _fun61121_ip = 25; continue _fun61121 }
 20:
            mike = entity.type;
 25:
            entity = _closure1_slot0;
            entity = entity.FORWARD;
            entity = mike === entity;
            return entity;
        }
    };
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: isForwardServerMessage
        _fun61122: for(var _fun61122_ip = 0; ; ) switch(_fun61122_ip) {
 0:
            entity = argFoo;
            entity = entity.message_reference;
            mike = null;
            zulu = mike == entity;
            mike = undefined;
            if(zulu) { _fun61122_ip = 25; continue _fun61122 }
 20:
            mike = entity.type;
 25:
            entity = _closure1_slot0;
            entity = entity.FORWARD;
            entity = mike === entity;
            return entity;
        }
    };
    zulu['isForwardServerMessage'] = mike;
    return entity;
})();