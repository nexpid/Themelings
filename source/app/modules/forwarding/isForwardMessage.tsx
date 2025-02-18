// app/modules/forwarding/isForwardMessage.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.MessageReferenceTypes;
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/forwarding/isForwardMessage.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: isForwardMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            entity = entity.messageReference;
            michal = null;
            zuuluu = michal == entity;
            michal = undefined;
            if(zuuluu) { _fun00002_ip = 25; continue _fun00001 }
 20:
            michal = entity.type;
 25:
            entity = _closure1_slot0;
            entity = entity.FORWARD;
            entity = michal === entity;
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: isForwardServerMessage
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            entity = entity.message_reference;
            michal = null;
            zuuluu = michal == entity;
            michal = undefined;
            if(zuuluu) { _fun00004_ip = 25; continue _fun00003 }
 20:
            michal = entity.type;
 25:
            entity = _closure1_slot0;
            entity = entity.FORWARD;
            entity = michal === entity;
            return entity;
        }
    };
    zuuluu['isForwardServerMessage'] = michal;
    return entity;
})();