// app/modules/video_calls/native/usePipVideoOrStream.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golfie;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    report = tangon.isStreamParticipant;
    var _closure1_slot11 = report;
    report = tangon.isUserParticipant;
    var _closure1_slot12 = report;
    tangon = tangon.ParticipantTypes;
    var _closure1_slot13 = tangon;
    tangon = function(argFoo) { // Original name: usePipVideoOrStream
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 9;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStores;
        golfie = _closure1_slot4;
        zuuluu = new Array(3);
        zuuluu[0] = golfie;
        golfie = _closure1_slot10;
        zuuluu[1] = golfie;
        michal = _closure1_slot5;
        zuuluu[2] = michal;
        michal = new Array(1);
        michal[0] = oscard;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = _closure2_slot0;
                tangon = null;
                if(!(tangon == entity)) { _fun00002_ip = 21; continue _fun00001 }
 15:
                zuuluu = new Array(0);
                _fun00002_ip = 43; continue _fun00001;
 21:
                oscard = _closure1_slot4;
                michal = oscard.getVideoParticipants;
                entity = _closure2_slot0;
                zuuluu = michal.bind(oscard)(entity);
 43:
                entity = _closure2_slot0;
                entity = tangon != entity;
                oscard = null;
                if(!entity) { _fun00002_ip = 78; continue _fun00001 }
 56:
                option = _closure1_slot4;
                michal = option.getSelectedParticipant;
                entity = _closure2_slot0;
                oscard = michal.bind(option)(entity);
 78:
                michal = zuuluu.find;
                entity = function(argFoo) {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        michal = argFoo;
                        zuuluu = michal.type;
                        entity = _closure1_slot13;
                        entity = entity.USER;
                        entity = zuuluu === entity;
                        if(!entity) { _fun00004_ip = 37; continue _fun00003 }
 28:
                        michal = michal.localVideoDisabled;
                        entity = !michal;
 37:
                        return entity;
                    }
                };
                entity = michal.bind(zuuluu)(entity);
                verify = _closure1_slot15;
                michal = {};
                option = _closure2_slot0;
                michal['channelId'] = option;
                offset = _closure1_slot10;
                michal['VideoSpeakerStore'] = offset;
                offset = _closure1_slot4;
                michal['ChannelRTCStore'] = offset;
                offset = undefined;
                michal = verify.bind(offset)(michal);
                if(!(tangon == option)) { _fun00002_ip = 146; continue _fun00001 }
 140:
                yankee = new Array(0);
                _fun00002_ip = 165; continue _fun00001;
 146:
                verify = _closure1_slot5;
                option = verify.getAllActiveStreamsForChannel;
                golfie = _closure2_slot0;
                yankee = option.bind(verify)(golfie);
 165:
                var _closure3_slot0 = michal;
                golfie = _closure1_slot11;
                golfie = golfie.bind(offset)(michal);
                option = michal;
                if(!golfie) { _fun00002_ip = 219; continue _fun00001 }
 184:
                verify = yankee.filter;
                golfie = function(argFoo) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        report = argFoo;
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 10;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.encodeStreamKey;
                        michal = {};
                        oscard = report.streamType;
                        michal['streamType'] = oscard;
                        oscard = report.guildId;
                        michal['guildId'] = oscard;
                        oscard = report.channelId;
                        michal['channelId'] = oscard;
                        report = report.ownerId;
                        michal['ownerId'] = report;
                        michal = zuuluu.bind(tangon)(michal);
                        zuuluu = _closure3_slot0;
                        tangon = null;
                        tangon = tangon == zuuluu;
                        if(tangon) { _fun00006_ip = 102; continue _fun00005 }
 97:
                        entity = zuuluu.id;
 102:
                        entity = michal === entity;
                        return entity;
                    }
                };
                golfie = verify.bind(yankee)(golfie);
                verify = golfie.length;
                golfie = 0;
                if(!(!(verify > golfie))) { _fun00002_ip = 216; continue _fun00001 }
 210:
                _closure3_slot0 = offset;
                michal = undefined;
 216:
                option = michal;
 219:
                michal = entity;
                if(!(tangon != option)) { _fun00002_ip = 229; continue _fun00001 }
 226:
                michal = option;
 229:
                report = tangon != oscard;
                if(!report) { _fun00002_ip = 259; continue _fun00001 }
 236:
                golfie = oscard.id;
                verify = tangon == option;
                oscard = undefined;
                if(verify) { _fun00002_ip = 255; continue _fun00001 }
 250:
                oscard = option.id;
 255:
                report = golfie === oscard;
 259:
                if(!report) { _fun00002_ip = 266; continue _fun00001 }
 262:
                report = tangon != michal;
 266:
                if(!report) { _fun00002_ip = 292; continue _fun00001 }
 269:
                golfie = michal.id;
                verify = tangon == option;
                oscard = undefined;
                if(verify) { _fun00002_ip = 288; continue _fun00001 }
 283:
                oscard = option.id;
 288:
                report = golfie === oscard;
 292:
                if(!report) { _fun00002_ip = 342; continue _fun00001 }
 295:
                golfie = _closure1_slot0;
                yankee = _closure1_slot2;
                oscard = 11;
                oscard = yankee[oscard];
                option = golfie.bind(offset)(oscard);
                golfie = option.isModalOpen;
                verify = _closure1_slot1;
                oscard = 12;
                oscard = yankee[oscard];
                oscard = verify.bind(offset)(oscard);
                report = golfie.bind(option)(oscard);
 342:
                if(!report) { _fun00002_ip = 348; continue _fun00001 }
 345:
                michal = entity;
 348:
                report = tangon != michal;
                entity = null;
                if(!report) { _fun00002_ip = 396; continue _fun00001 }
 357:
                report = michal.type;
                zuuluu = _closure1_slot13;
                zuuluu = zuuluu.ACTIVITY;
                entity = null;
                if(!(report !== zuuluu)) { _fun00002_ip = 396; continue _fun00001 }
 378:
                zuuluu = michal.streamId;
                zuuluu = tangon != zuuluu;
                entity = null;
                if(!zuuluu) { _fun00002_ip = 396; continue _fun00001 }
 393:
                entity = michal;
 396:
                return entity;
            }
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    var _closure1_slot14 = tangon;
    report = function(argFoo) { // Original name: getVideoOrStreamParticipant
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            golfie = entity.channelId;
            option = entity.VideoSpeakerStore;
            oscard = entity.ChannelRTCStore;
            entity = null;
            if(!(entity == golfie)) { _fun00008_ip = 32; continue _fun00007 }
 26:
            tangon = new Array(0);
            _fun00008_ip = 43; continue _fun00007;
 32:
            michal = oscard.getVideoParticipants;
            tangon = michal.bind(oscard)(golfie);
 43:
            zuuluu = tangon.find;
            michal = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = argFoo;
                    tangon = zuuluu.id;
                    report = _closure1_slot6;
                    entity = report.getId;
                    entity = entity.bind(report)();
                    entity = tangon !== entity;
                    if(!entity) { _fun00010_ip = 58; continue _fun00009 }
 32:
                    tangon = _closure1_slot12;
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    michal = !michal;
                    if(michal) { _fun00010_ip = 55; continue _fun00009 }
 49:
                    michal = zuuluu.localVideoDisabled;
 55:
                    entity = michal;
 58:
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            tangon = entity != golfie;
            zuuluu = null;
            if(!tangon) { _fun00008_ip = 95; continue _fun00007 }
 70:
            report = oscard.getParticipant;
            tangon = option.getSpeaker;
            tangon = tangon.bind(option)(golfie);
            zuuluu = report.bind(oscard)(golfie, tangon);
 95:
            if(!(entity != zuuluu)) { _fun00008_ip = 102; continue _fun00007 }
 99:
            michal = zuuluu;
 102:
            tangon = _closure1_slot12;
            zuuluu = undefined;
            zuuluu = tangon.bind(zuuluu)(michal);
            if(!zuuluu) { _fun00008_ip = 130; continue _fun00007 }
 119:
            zuuluu = michal.localVideoDisabled;
            entity = null;
            if(zuuluu) { _fun00008_ip = 133; continue _fun00007 }
 130:
            entity = michal;
 133:
            return entity;
        }
    };
    var _closure1_slot15 = report;
    report = 13;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/video_calls/native/usePipVideoOrStream.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    michal = function(argFoo) {
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = argFoo;
            oscard = michal.isActivityViewFocused;
            var _closure2_slot0 = oscard;
            report = undefined;
            var _closure2_slot2 = report;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            verify = 9;
            zuuluu = zuuluu[verify];
            option = tangon.bind(report)(zuuluu);
            golfie = option.useStateFromStores;
            zuuluu = _closure1_slot9;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                michal = _closure1_slot9;
                entity = michal.getChannelId;
                entity = entity.bind(michal)();
                return entity;
            };
            option = golfie.bind(option)(tangon, zuuluu);
            var _closure2_slot1 = option;
            tangon = _closure1_slot14;
            zuuluu = null;
            golfie = zuuluu != option;
            zuuluu = undefined;
            if(!golfie) { _fun00012_ip = 94; continue _fun00011 }
 91:
            zuuluu = option;
 94:
            golfie = tangon.bind(report)(zuuluu);
            _closure2_slot2 = golfie;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[verify];
            report = tangon.bind(report)(zuuluu);
            tangon = report.useStateFromStores;
            verify = _closure1_slot7;
            zuuluu = new Array(3);
            zuuluu[0] = verify;
            verify = _closure1_slot3;
            zuuluu[1] = verify;
            michal = _closure1_slot8;
            zuuluu[2] = michal;
            michal = new Array(3);
            michal[0] = option;
            michal[1] = golfie;
            michal[2] = oscard;
            entity = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    report = _closure1_slot7;
                    zuuluu = report.getChannel;
                    entity = _closure2_slot1;
                    entity = zuuluu.bind(report)(entity);
                    report = null;
                    if(!(report != entity)) { _fun00014_ip = 132; continue _fun00013 }
 30:
                    zuuluu = _closure1_slot3;
                    entity = zuuluu.getCurrentEmbeddedActivity;
                    entity = entity.bind(zuuluu)();
                    zuuluu = _closure2_slot2;
                    zuuluu = report != zuuluu;
                    if(!zuuluu) { _fun00014_ip = 79; continue _fun00013 }
 55:
                    golfie = _closure1_slot8;
                    oscard = golfie.isLocalVideoDisabled;
                    michal = _closure2_slot2;
                    michal = michal.id;
                    zuuluu = oscard.bind(golfie)(michal);
 79:
                    entity = report != entity;
                    if(!entity) { _fun00014_ip = 93; continue _fun00013 }
 86:
                    michal = _closure2_slot0;
                    entity = !michal;
 93:
                    if(entity) { _fun00014_ip = 130; continue _fun00013 }
 96:
                    michal = _closure2_slot2;
                    michal = report != michal;
                    if(!michal) { _fun00014_ip = 121; continue _fun00013 }
 107:
                    tangon = _closure2_slot2;
                    tangon = tangon.streamId;
                    michal = report != tangon;
 121:
                    if(!michal) { _fun00014_ip = 127; continue _fun00013 }
 124:
                    michal = !zuuluu;
 127:
                    entity = michal;
 130:
                    return entity;
 132:
                    entity = false;
                    return entity;
                }
            };
            entity = tangon.bind(report)(zuuluu, entity, michal);
            return entity;
        }
    };
    zuuluu['useHasPipParticipant'] = michal;
    return entity;
})();