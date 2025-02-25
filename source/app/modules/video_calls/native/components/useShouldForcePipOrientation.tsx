// app/modules/video_calls/native/components/useShouldForcePipOrientation.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.OrientationLockState;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.isStreamParticipant;
    var _closure1_slot7 = golfie;
    tangon = tangon.ParticipantTypes;
    var _closure1_slot8 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/video_calls/native/components/useShouldForcePipOrientation.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useShouldForcePipOrientation
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            entity = entity.channel;
            var _closure2_slot0 = entity;
            oscard = _closure1_slot1;
            option = _closure1_slot2;
            tangon = 5;
            tangon = option[tangon];
            report = undefined;
            tangon = oscard.bind(report)(tangon);
            entity = entity.id;
            entity = tangon.bind(report)(entity);
            oscard = _closure1_slot0;
            tangon = 6;
            golfie = option[tangon];
            romeon = oscard.bind(report)(golfie);
            yankee = romeon.useStateFromStores;
            verify = _closure1_slot4;
            offset = new Array(2);
            offset[0] = verify;
            golfie = _closure1_slot5;
            offset[1] = golfie;
            golfie = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = _closure1_slot4;
                    tangon = report.getParticipant;
                    entity = _closure2_slot0;
                    michal = entity.id;
                    oscard = _closure1_slot5;
                    entity = oscard.getId;
                    entity = entity.bind(oscard)();
                    michal = tangon.bind(report)(michal, entity);
                    tangon = null;
                    report = tangon != michal;
                    entity = null;
                    if(!report) { _fun00004_ip = 95; continue _fun00003 }
 56:
                    report = michal.type;
                    zuuluu = _closure1_slot8;
                    zuuluu = zuuluu.USER;
                    entity = null;
                    if(!(report === zuuluu)) { _fun00004_ip = 95; continue _fun00003 }
 77:
                    zuuluu = michal.streamId;
                    zuuluu = tangon != zuuluu;
                    entity = null;
                    if(!zuuluu) { _fun00004_ip = 95; continue _fun00003 }
 92:
                    entity = michal;
 95:
                    return entity;
                }
            };
            golfie = yankee.bind(romeon)(offset, golfie);
            tangon = option[tangon];
            option = oscard.bind(report)(tangon);
            oscard = option.useStateFromStoresObject;
            offset = _closure1_slot3;
            tangon = new Array(2);
            tangon[0] = offset;
            tangon[1] = verify;
            michal = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    report = _closure1_slot3;
                    zuuluu = report.getSelfEmbeddedActivityForChannel;
                    entity = _closure2_slot0;
                    michal = entity.id;
                    zuuluu = zuuluu.bind(report)(michal);
                    report = _closure1_slot4;
                    michal = report.getSelectedParticipant;
                    entity = entity.id;
                    oscard = michal.bind(report)(entity);
                    entity = {};
                    michal = null;
                    golfie = michal == zuuluu;
                    offset = undefined;
                    report = undefined;
                    if(golfie) { _fun00006_ip = 70; continue _fun00005 }
 65:
                    report = zuuluu.applicationId;
 70:
                    golfie = michal != report;
                    report = null;
                    if(!golfie) { _fun00006_ip = 155; continue _fun00005 }
 79:
                    golfie = michal == oscard;
                    option = undefined;
                    if(golfie) { _fun00006_ip = 93; continue _fun00005 }
 88:
                    option = oscard.id;
 93:
                    verify = _closure1_slot0;
                    yankee = _closure1_slot2;
                    golfie = 7;
                    golfie = yankee[golfie];
                    offset = verify.bind(offset)(golfie);
                    verify = offset.getEmbeddedActivityParticipantId;
                    golfie = {};
                    yankee = zuuluu.applicationId;
                    golfie['applicationId'] = yankee;
                    yankee = zuuluu.compositeInstanceId;
                    golfie['instanceId'] = yankee;
                    golfie = verify.bind(offset)(golfie);
                    report = null;
                    if(!(option === golfie)) { _fun00006_ip = 155; continue _fun00005 }
 152:
                    report = oscard;
 155:
                    entity['focusedEmbeddedActivityParticipant'] = report;
                    report = michal == zuuluu;
                    michal = null;
                    if(report) { _fun00006_ip = 189; continue _fun00005 }
 169:
                    report = _closure1_slot3;
                    tangon = report.getPipOrientationLockStateForApp;
                    zuuluu = zuuluu.applicationId;
                    michal = tangon.bind(report)(zuuluu);
 189:
                    entity['activityLockOrientation'] = michal;
                    return entity;
                }
            };
            michal = oscard.bind(option)(tangon, michal);
            option = michal.focusedEmbeddedActivityParticipant;
            oscard = michal.activityLockOrientation;
            michal = null;
            verify = michal != entity;
            tangon = null;
            if(!verify) { _fun00002_ip = 199; continue _fun00001 }
 166:
            verify = entity.user;
            offset = verify.id;
            yankee = _closure1_slot5;
            verify = yankee.getId;
            verify = verify.bind(yankee)();
            tangon = null;
            if(!(offset !== verify)) { _fun00002_ip = 199; continue _fun00001 }
 196:
            tangon = entity;
 199:
            entity = tangon;
            if(!(michal != option)) { _fun00002_ip = 209; continue _fun00001 }
 206:
            entity = option;
 209:
            if(!(michal != entity)) { _fun00002_ip = 295; continue _fun00001 }
 213:
            option = _closure1_slot7;
            option = option.bind(report)(entity);
            if(option) { _fun00002_ip = 239; continue _fun00001 }
 225:
            option = _closure1_slot6;
            option = option.LANDSCAPE;
            if(!(oscard === option)) { _fun00002_ip = 295; continue _fun00001 }
 239:
            if(!(michal == golfie)) { _fun00002_ip = 295; continue _fun00001 }
 243:
            if(!(michal != tangon)) { _fun00002_ip = 261; continue _fun00001 }
 247:
            tangon = tangon.id;
            entity = entity.id;
            if(!(tangon === entity)) { _fun00002_ip = 295; continue _fun00001 }
 261:
            tangon = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 8;
            entity = golfie[entity];
            entity = tangon.bind(report)(entity);
            entity = entity.OrientationType;
            entity = entity.LANDSCAPE;
            _fun00002_ip = 394; continue _fun00001;
 295:
            tangon = _closure1_slot6;
            tangon = tangon.LANDSCAPE;
            if(!(oscard !== tangon)) { _fun00002_ip = 359; continue _fun00001 }
 309:
            tangon = _closure1_slot6;
            tangon = tangon.PORTRAIT;
            michal = null;
            if(!(oscard === tangon)) { _fun00002_ip = 357; continue _fun00001 }
 325:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            tangon = 8;
            tangon = golfie[tangon];
            tangon = oscard.bind(report)(tangon);
            tangon = tangon.OrientationType;
            michal = tangon.PORTRAIT;
 357:
            _fun00002_ip = 391; continue _fun00001;
 359:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 8;
            zuuluu = oscard[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.OrientationType;
            michal = zuuluu.LANDSCAPE;
 391:
            entity = michal;
 394:
            return entity;
        }
    };
    zuuluu['useShouldForcePipOrientation'] = michal;
    return entity;
})();