// app/modules/gateway/PostConnectionCallbackStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    entity = function() { // Original name: shouldWaitForBlockingModals
        michal = _closure1_slot0;
        entity = michal.getType;
        michal = entity.bind(michal)();
        entity = null;
        entity = entity != michal;
        return entity;
    };
    var _closure1_slot3 = entity;
    option = function() { // Original name: processCallbacks
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = _closure1_slot3;
            entity = undefined;
            michal = michal.bind(entity)();
            if(michal) { _fun00002_ip = 45; continue _fun00001 }
 16:
            report = _closure1_slot2;
            tangon = report.forEach;
            michal = function(argFoo) {
                zuuluu = _closure1_slot4;
                entity = undefined;
                michal = argFoo;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            michal = tangon.bind(report)(michal);
            michal = new Array(0);
            _closure1_slot2 = michal;
 45:
            return entity;
        }
    };
    entity = function(argFoo) { // Original name: handleCallback
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = global;
        zuuluu = entity.setImmediate;
        entity = undefined;
        michal = function() {
            michal = _closure2_slot0;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        };
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    var _closure1_slot4 = entity;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = report[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot1 = tangon;
    tangon = new Array(0);
    var _closure1_slot2 = tangon;
    tangon = 2;
    golfie = report[tangon];
    offset = oscard.bind(entity)(golfie);
    verify = offset.subscribe;
    golfie = 'CONNECTION_OPEN';
    golfie = verify.bind(offset)(golfie, option);
    golfie = report[tangon];
    offset = oscard.bind(entity)(golfie);
    verify = offset.subscribe;
    golfie = 'CONNECTION_RESUMED';
    golfie = verify.bind(offset)(golfie, option);
    tangon = report[tangon];
    golfie = oscard.bind(entity)(tangon);
    oscard = golfie.subscribe;
    tangon = 'NUF_COMPLETE';
    tangon = oscard.bind(golfie)(tangon, option);
    tangon = 3;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/gateway/PostConnectionCallbackStore.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: addPostConnectionCallback
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            tangon = _closure1_slot1;
            michal = tangon.isConnectedOrOverlay;
            michal = michal.bind(tangon)();
            if(!michal) { _fun00004_ip = 47; continue _fun00003 }
 23:
            michal = _closure1_slot3;
            tangon = undefined;
            michal = michal.bind(tangon)();
            if(michal) { _fun00004_ip = 47; continue _fun00003 }
 36:
            michal = _closure1_slot4;
            michal = michal.bind(tangon)(zuuluu);
            _fun00004_ip = 61; continue _fun00003;
 47:
            michal = _closure1_slot2;
            entity = michal.push;
            entity = entity.bind(michal)(zuuluu);
 61:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['addPostConnectionCallback'] = michal;
    return entity;
})();