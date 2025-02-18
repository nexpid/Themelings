// app/modules/media_keyboard/native/useUploadDisabled.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.DraftType;
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.MAX_UPLOAD_COUNT;
    var _closure1_slot5 = golfie;
    tangon = tangon.Permissions;
    var _closure1_slot6 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/media_keyboard/native/useUploadDisabled.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useUploadDisabled
        michal = argFoo;
        var _closure2_slot0 = michal;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 4;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        oscard = _closure1_slot3;
        michal = new Array(2);
        michal[0] = oscard;
        report = _closure1_slot4;
        michal[1] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                oscard = _closure1_slot4;
                zuuluu = oscard.getUploads;
                entity = _closure2_slot0;
                michal = entity.id;
                entity = _closure1_slot2;
                entity = entity.ChannelMessage;
                entity = zuuluu.bind(oscard)(michal, entity);
                michal = entity.length;
                entity = _closure1_slot5;
                entity = michal >= entity;
                if(entity) { _fun00002_ip = 154; continue _fun00001 }
 57:
                michal = _closure2_slot0;
                zuuluu = michal.id;
                golfie = _closure1_slot0;
                oscard = _closure1_slot1;
                michal = 5;
                oscard = oscard[michal];
                michal = undefined;
                michal = golfie.bind(michal)(oscard);
                michal = michal.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                michal = zuuluu === michal;
                if(michal) { _fun00002_ip = 151; continue _fun00001 }
 101:
                oscard = _closure2_slot0;
                zuuluu = oscard.isPrivate;
                zuuluu = zuuluu.bind(oscard)();
                if(zuuluu) { _fun00002_ip = 148; continue _fun00001 }
 118:
                golfie = _closure1_slot3;
                oscard = golfie.can;
                report = _closure1_slot6;
                report = report.ATTACH_FILES;
                tangon = _closure2_slot0;
                zuuluu = oscard.bind(golfie)(report, tangon);
 148:
                michal = !zuuluu;
 151:
                entity = michal;
 154:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();