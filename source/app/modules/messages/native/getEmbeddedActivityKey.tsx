// app/modules/messages/native/getEmbeddedActivityKey.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    tangon = argPlu;
    entity = 0;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/getEmbeddedActivityKey.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: getEmbeddedActivityKey
        entity = argFoo;
        michal = entity.location;
        yankee = michal.id;
        verify = entity.applicationId;
        golfie = entity.launchId;
        entity = global;
        entity = entity.HermesInternal;
        zuuluu = entity.concat;
        romeon = '';
        entity = ':';
        offset = entity;
        option = entity;
        entity = romeon[zuuluu](yankee, offset, verify, option, golfie, oscard);
        return entity;
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: parseEmbeddedActivityKey
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.split;
            entity = ':';
            tangon = michal.bind(zuuluu)(entity);
            michal = tangon.length;
            entity = 3;
            michal = michal < entity;
            entity = null;
            if(michal) { _fun00002_ip = 72; continue _fun00001 }
 34:
            michal = {};
            zuuluu = 0;
            zuuluu = tangon[zuuluu];
            michal['channelId'] = zuuluu;
            zuuluu = 1;
            zuuluu = tangon[zuuluu];
            michal['applicationId'] = zuuluu;
            zuuluu = 2;
            zuuluu = tangon[zuuluu];
            michal['instanceId'] = zuuluu;
            entity = michal;
 72:
            return entity;
        }
    };
    zuuluu['parseEmbeddedActivityKey'] = michal;
    return entity;
})();