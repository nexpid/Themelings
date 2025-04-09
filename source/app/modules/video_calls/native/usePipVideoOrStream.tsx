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
                if(!(tangon == option)) { _fun00002_ip = 145; continue _fun00001 }
 139:
                yankee = new Array(0);
                _fun00002_ip = 164; continue _fun00001;
 145:
                verify = _closure1_slot5;
                option = verify.getAllActiveStreamsForChannel;
                golfie = _closure2_slot0;
                yankee = option.bind(verify)(golfie);
 164:
                var _closure3_slot0 = michal;
                golfie = _closure1_slot11;
                golfie = golfie.bind(offset)(michal);
                option = michal;
                if(!golfie) { _fun00002_ip = 218; continue _fun00001 }
 183:
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
                if(!(!(verify > golfie))) { _fun00002_ip = 215; continue _fun00001 }
 209:
                _closure3_slot0 = offset;
                michal = undefined;
 215:
                option = michal;
 218:
                michal = entity;
                if(!(tangon != option)) { _fun00002_ip = 228; continue _fun00001 }
 225:
                michal = option;
 228:
                report = tangon != oscard;
                if(!report) { _fun00002_ip = 258; continue _fun00001 }
 235:
                golfie = oscard.id;
                verify = tangon == option;
                oscard = undefined;
                if(verify) { _fun00002_ip = 254; continue _fun00001 }
 249:
                oscard = option.id;
 254:
                report = golfie === oscard;
 258:
                if(!report) { _fun00002_ip = 265; continue _fun00001 }
 261:
                report = tangon != michal;
 265:
                if(!report) { _fun00002_ip = 291; continue _fun00001 }
 268:
                golfie = michal.id;
                verify = tangon == option;
                oscard = undefined;
                if(verify) { _fun00002_ip = 287; continue _fun00001 }
 282:
                oscard = option.id;
 287:
                report = golfie === oscard;
 291:
                if(!report) { _fun00002_ip = 341; continue _fun00001 }
 294:
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
 341:
                if(!report) { _fun00002_ip = 347; continue _fun00001 }
 344:
                michal = entity;
 347:
                report = tangon != michal;
                entity = null;
                if(!report) { _fun00002_ip = 416; continue _fun00001 }
 356:
                oscard = michal.type;
                report = _closure1_slot13;
                report = report.ACTIVITY;
                entity = null;
                if(!(oscard !== report)) { _fun00002_ip = 416; continue _fun00001 }
 377:
                report = michal.type;
                zuuluu = _closure1_slot13;
                zuuluu = zuuluu.PRESENCE_EMBEDDED_ACTIVITY;
                entity = null;
                if(!(report !== zuuluu)) { _fun00002_ip = 416; continue _fun00001 }
 398:
                zuuluu = michal.streamId;
                zuuluu = tangon != zuuluu;
                entity = null;
                if(!zuuluu) { _fun00002_ip = 416; continue _fun00001 }
 413:
                entity = michal;
 416:
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
            if(!tangon) { _fun00008_ip = 94; continue _fun00007 }
 69:
            report = oscard.getParticipant;
            tangon = option.getSpeaker;
            tangon = tangon.bind(option)(golfie);
            zuuluu = report.bind(oscard)(golfie, tangon);
 94:
            if(!(entity != zuuluu)) { _fun00008_ip = 101; continue _fun00007 }
 98:
            michal = zuuluu;
 101:
            tangon = _closure1_slot12;
            zuuluu = undefined;
            zuuluu = tangon.bind(zuuluu)(michal);
            if(!zuuluu) { _fun00008_ip = 129; continue _fun00007 }
 118:
            zuuluu = michal.localVideoDisabled;
            entity = null;
            if(zuuluu) { _fun00008_ip = 132; continue _fun00007 }
 129:
            entity = michal;
 132:
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