// app/modules/quests/native/VideoQuestModal/hooks/useVideoQuestPlayerAnalytics.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AppState;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot7 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/quests/native/VideoQuestModal/hooks/useVideoQuestPlayerAnalytics.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useVideoQuestPlayerAnalytics
        entity = argFoo;
        output = entity.duration;
        var _closure2_slot0 = output;
        zuuluu = entity.isQuestCompleted;
        var _closure2_slot1 = zuuluu;
        kiloes = entity.playerState;
        var _closure2_slot2 = kiloes;
        yankee = entity.questId;
        var _closure2_slot3 = yankee;
        michal = entity.videoAssetId;
        var _closure2_slot4 = michal;
        offset = entity.videoSessionId;
        var _closure2_slot5 = offset;
        option = _closure1_slot4;
        tangon = option.useState;
        sizing = false;
        tangon = tangon.bind(option)(sizing);
        backup = _closure1_slot3;
        oscard = undefined;
        romeon = 2;
        tangon = backup.bind(oscard)(tangon, romeon);
        verify = 0;
        foxtra = tangon[verify];
        golfie = 1;
        tangon = tangon[golfie];
        var _closure2_slot6 = tangon;
        tangon = option.useState;
        tangon = tangon.bind(option)(sizing);
        tangon = backup.bind(oscard)(tangon, romeon);
        romeon = tangon[verify];
        tangon = tangon[golfie];
        var _closure2_slot7 = tangon;
        golfie = option.useRef;
        tangon = null;
        golfie = golfie.bind(option)(tangon);
        var _closure2_slot8 = golfie;
        golfie = option.useRef;
        golfie = golfie.bind(option)(tangon);
        var _closure2_slot9 = golfie;
        sizing = _closure1_slot0;
        result = _closure1_slot2;
        golfie = 5;
        golfie = result[golfie];
        verify = sizing.bind(oscard)(golfie);
        golfie = verify.useQuestImpression;
        verify = golfie.bind(verify)();
        var _closure2_slot10 = verify;
        echoed = option.useEffect;
        backup = function() {
            michal = _closure2_slot9;
            entity = global;
            zuuluu = entity.Date;
            entity = zuuluu.now;
            entity = entity.bind(zuuluu)();
            michal['current'] = entity;
            entity = undefined;
            return entity;
        };
        golfie = new Array(0);
        golfie = echoed.bind(option)(backup, golfie);
        echoed = option.useEffect;
        backup = new Array(4);
        backup[0] = yankee;
        backup[1] = offset;
        backup[2] = kiloes;
        backup[3] = verify;
        golfie = function() {
            report = _closure1_slot5;
            tangon = report.addEventListener;
            zuuluu = 'change';
            michal = function(argFoo) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    entity = _closure2_slot8;
                    entity = entity.current;
                    option = null;
                    if(!(option != entity)) { _fun00002_ip = 179; continue _fun00001 }
 21:
                    michal = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 6;
                    entity = zuuluu[entity];
                    report = undefined;
                    zuuluu = michal.bind(report)(entity);
                    michal = zuuluu.trackQuestEvent;
                    entity = {};
                    tangon = _closure2_slot3;
                    entity['questId'] = tangon;
                    verify = 'active';
                    tangon = argFoo;
                    if(!(verify !== tangon)) { _fun00002_ip = 86; continue _fun00001 }
 74:
                    tangon = _closure1_slot7;
                    tangon = tangon.QUEST_VIDEO_APP_UNFOCUSED;
                    _fun00002_ip = 96; continue _fun00001;
 86:
                    golfie = _closure1_slot7;
                    tangon = golfie.QUEST_VIDEO_APP_FOCUSED;
 96:
                    entity['event'] = tangon;
                    tangon = {};
                    golfie = _closure2_slot8;
                    golfie = golfie.current;
                    tangon['video_timestamp_seconds'] = golfie;
                    golfie = _closure2_slot2;
                    tangon['video_state'] = golfie;
                    golfie = _closure2_slot5;
                    tangon['video_session_id'] = golfie;
                    golfie = _closure2_slot10;
                    golfie = option == golfie;
                    report = undefined;
                    if(golfie) { _fun00002_ip = 164; continue _fun00001 }
 150:
                    golfie = _closure2_slot10;
                    oscard = golfie.getId;
                    report = oscard.bind(golfie)();
 164:
                    tangon['impression_id'] = report;
                    entity['properties'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 179:
                    entity = undefined;
                    return entity;
                }
            };
            michal = tangon.bind(report)(zuuluu, michal);
            var _closure3_slot0 = michal;
            entity = function() {
                michal = _closure3_slot0;
                entity = michal.remove;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            };
            return entity;
        };
        golfie = echoed.bind(option)(golfie, backup);
        backup = option.useCallback;
        golfie = new Array(6);
        golfie[0] = yankee;
        golfie[1] = michal;
        golfie[2] = zuuluu;
        golfie[3] = offset;
        golfie[4] = output;
        golfie[5] = verify;
        zuuluu = function(argFoo) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                golfie = argFoo;
                entity = _closure2_slot8;
                entity = entity.current;
                option = null;
                if(!(option != entity)) { _fun00004_ip = 243; continue _fun00003 }
 24:
                offset = _closure1_slot0;
                yankee = _closure1_slot2;
                entity = 6;
                entity = yankee[entity];
                oscard = undefined;
                zuuluu = offset.bind(oscard)(entity);
                michal = zuuluu.trackQuestEvent;
                entity = {};
                verify = _closure2_slot3;
                entity['questId'] = verify;
                tangon = _closure1_slot7;
                tangon = tangon.QUEST_VIDEO_SEGMENT_WATCHED;
                entity['event'] = tangon;
                tangon = {};
                backup = tangon;
                foxtra = golfie;
                verify = copyDataProperties(backup, foxtra);
                romeon = _closure2_slot4;
                verify = 'video_asset_id';
                tangon[verify] = romeon;
                romeon = _closure2_slot1;
                verify = 'quest_completed';
                tangon[verify] = romeon;
                romeon = _closure2_slot0;
                verify = 'video_duration_sec';
                tangon[verify] = romeon;
                verify = 7;
                verify = yankee[verify];
                yankee = offset.bind(oscard)(verify);
                offset = yankee.formatVideoProgressRatio;
                verify = golfie.segment_end_sec;
                golfie = _closure2_slot8;
                golfie = golfie.current;
                verify = offset.bind(yankee)(verify, golfie);
                golfie = 'video_progress';
                tangon[golfie] = verify;
                verify = _closure2_slot5;
                golfie = 'video_session_id';
                tangon[golfie] = verify;
                golfie = _closure2_slot10;
                golfie = option == golfie;
                if(golfie) { _fun00004_ip = 224; continue _fun00003 }
 210:
                golfie = _closure2_slot10;
                report = golfie.getId;
                oscard = report.bind(golfie)();
 224:
                report = 'impression_id';
                tangon[report] = oscard;
                entity['properties'] = tangon;
                entity = michal.bind(zuuluu)(entity);
 243:
                entity = undefined;
                return entity;
            }
        };
        golfie = backup.bind(option)(zuuluu, golfie);
        echoed = option.useCallback;
        backup = function() {
            entity = _closure2_slot8;
            entity = entity.current;
            return entity;
        };
        zuuluu = new Array(0);
        backup = echoed.bind(option)(backup, zuuluu);
        zuuluu = _closure1_slot1;
        entity = 8;
        entity = result[entity];
        zuuluu = zuuluu.bind(oscard)(entity);
        entity = {};
        entity['getCurrentVideoTime'] = backup;
        backup = 9;
        backup = result[backup];
        backup = sizing.bind(oscard)(backup);
        backup = backup.PlayerState;
        backup = backup.PLAYING;
        backup = kiloes === backup;
        entity['isPlaying'] = backup;
        entity['isMetadataLoaded'] = foxtra;
        entity['isInitialSeekComplete'] = romeon;
        entity['onAnalytics'] = golfie;
        golfie = 4000;
        entity['emitIntervalMs'] = golfie;
        golfie = 2000;
        entity['minSegmentDurationMs'] = golfie;
        entity = zuuluu.bind(oscard)(entity);
        entity = entity.forceSendCurrentSegment;
        var _closure2_slot11 = entity;
        zuuluu = option.useRef;
        zuuluu = zuuluu.bind(option)(tangon);
        var _closure2_slot12 = zuuluu;
        golfie = option.useCallback;
        oscard = new Array(4);
        oscard[0] = yankee;
        oscard[1] = michal;
        oscard[2] = offset;
        oscard[3] = verify;
        zuuluu = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = _closure2_slot6;
                entity = undefined;
                zuuluu = true;
                michal = michal.bind(entity)(zuuluu);
                michal = _closure2_slot7;
                michal = michal.bind(entity)(zuuluu);
                michal = _closure2_slot12;
                michal = michal.current;
                option = null;
                michal = option != michal;
                oscard = null;
                if(!michal) { _fun00006_ip = 75; continue _fun00005 }
 45:
                michal = global;
                zuuluu = michal.Date;
                michal = zuuluu.now;
                zuuluu = michal.bind(zuuluu)();
                michal = _closure2_slot12;
                michal = michal.current;
                oscard = zuuluu - michal;
 75:
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 6;
                michal = tangon[michal];
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.trackQuestEvent;
                michal = {};
                report = _closure2_slot3;
                michal['questId'] = report;
                report = _closure1_slot7;
                report = report.QUEST_VIDEO_LOADING_ENDED;
                michal['event'] = report;
                report = {};
                offset = _closure2_slot4;
                report['video_asset_id'] = offset;
                offset = _closure1_slot6;
                verify = offset.getEffectiveConnectionSpeed;
                verify = verify.bind(offset)();
                report['network_connection_speed'] = verify;
                report['duration'] = oscard;
                oscard = _closure2_slot5;
                report['video_session_id'] = oscard;
                oscard = _closure2_slot10;
                option = option == oscard;
                oscard = undefined;
                if(option) { _fun00006_ip = 200; continue _fun00005 }
 186:
                option = _closure2_slot10;
                golfie = option.getId;
                oscard = golfie.bind(option)();
 200:
                report['impression_id'] = oscard;
                michal['properties'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        romeon = golfie.bind(option)(zuuluu, oscard);
        golfie = option.useCallback;
        oscard = new Array(1);
        oscard[0] = entity;
        zuuluu = function() {
            michal = _closure2_slot11;
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
        };
        backup = golfie.bind(option)(zuuluu, oscard);
        golfie = option.useCallback;
        oscard = new Array(4);
        oscard[0] = yankee;
        oscard[1] = offset;
        oscard[2] = michal;
        oscard[3] = verify;
        zuuluu = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = _closure2_slot12;
                entity = global;
                zuuluu = entity.Date;
                entity = zuuluu.now;
                entity = entity.bind(zuuluu)();
                michal['current'] = entity;
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 6;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.trackQuestEvent;
                michal = {};
                report = _closure2_slot3;
                michal['questId'] = report;
                report = _closure1_slot7;
                report = report.QUEST_VIDEO_LOADING_STARTED;
                michal['event'] = report;
                report = {};
                option = _closure2_slot4;
                report['video_asset_id'] = option;
                option = _closure1_slot6;
                oscard = option.getEffectiveConnectionSpeed;
                oscard = oscard.bind(option)();
                report['network_connection_speed'] = oscard;
                oscard = _closure2_slot5;
                report['video_session_id'] = oscard;
                oscard = true;
                report['is_hls_supported'] = oscard;
                option = _closure2_slot10;
                oscard = null;
                option = oscard == option;
                oscard = undefined;
                if(option) { _fun00008_ip = 164; continue _fun00007 }
 150:
                option = _closure2_slot10;
                golfie = option.getId;
                oscard = golfie.bind(option)();
 164:
                report['impression_id'] = oscard;
                michal['properties'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        golfie = golfie.bind(option)(zuuluu, oscard);
        zuuluu = option.useRef;
        zuuluu = zuuluu.bind(option)(tangon);
        var _closure2_slot13 = zuuluu;
        tangon = option.useRef;
        zuuluu = -1;
        zuuluu = tangon.bind(option)(zuuluu);
        var _closure2_slot14 = zuuluu;
        oscard = option.useCallback;
        tangon = new Array(4);
        tangon[0] = yankee;
        tangon[1] = michal;
        tangon[2] = offset;
        tangon[3] = verify;
        zuuluu = function(argFoo) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = argFoo;
                entity = entity.isBuffering;
                zuuluu = _closure1_slot6;
                michal = zuuluu.getEffectiveConnectionSpeed;
                option = michal.bind(zuuluu)();
                michal = _closure2_slot13;
                if(entity) { _fun00010_ip = 229; continue _fun00009 }
 41:
                entity = michal.current;
                yankee = null;
                entity = yankee != entity;
                offset = null;
                if(!entity) { _fun00010_ip = 87; continue _fun00009 }
 57:
                entity = global;
                zuuluu = entity.Date;
                entity = zuuluu.now;
                zuuluu = entity.bind(zuuluu)();
                entity = _closure2_slot13;
                entity = entity.current;
                offset = zuuluu - entity;
 87:
                zuuluu = _closure1_slot0;
                report = _closure1_slot2;
                entity = 6;
                entity = report[entity];
                verify = undefined;
                report = zuuluu.bind(verify)(entity);
                zuuluu = report.trackQuestEvent;
                entity = {};
                golfie = _closure2_slot3;
                entity['questId'] = golfie;
                golfie = _closure1_slot7;
                golfie = golfie.QUEST_VIDEO_BUFFERING_ENDED;
                entity['event'] = golfie;
                golfie = {};
                romeon = _closure2_slot4;
                golfie['video_asset_id'] = romeon;
                golfie['network_connection_speed'] = option;
                golfie['duration'] = offset;
                offset = _closure2_slot14;
                offset = offset.current;
                golfie['buffer_index'] = offset;
                offset = _closure2_slot5;
                golfie['video_session_id'] = offset;
                offset = _closure2_slot10;
                offset = yankee == offset;
                if(offset) { _fun00010_ip = 209; continue _fun00009 }
 195:
                yankee = _closure2_slot10;
                offset = yankee.getId;
                verify = offset.bind(yankee)();
 209:
                golfie['impression_id'] = verify;
                entity['properties'] = golfie;
                entity = zuuluu.bind(report)(entity);
                _fun00010_ip = 405; continue _fun00009;
 229:
                entity = global;
                zuuluu = entity.Date;
                entity = zuuluu.now;
                entity = entity.bind(zuuluu)();
                michal['current'] = entity;
                golfie = _closure2_slot14;
                michal = golfie.current;
                entity = 1;
                entity = michal + entity;
                golfie['current'] = entity;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 6;
                entity = zuuluu[entity];
                report = undefined;
                zuuluu = michal.bind(report)(entity);
                michal = zuuluu.trackQuestEvent;
                entity = {};
                verify = _closure2_slot3;
                entity['questId'] = verify;
                tangon = _closure1_slot7;
                tangon = tangon.QUEST_VIDEO_BUFFERING_STARTED;
                entity['event'] = tangon;
                tangon = {};
                verify = _closure2_slot4;
                tangon['video_asset_id'] = verify;
                tangon['network_connection_speed'] = option;
                golfie = golfie.current;
                tangon['buffer_index'] = golfie;
                golfie = _closure2_slot5;
                tangon['video_session_id'] = golfie;
                option = _closure2_slot10;
                golfie = null;
                golfie = golfie == option;
                if(golfie) { _fun00010_ip = 390; continue _fun00009 }
 376:
                golfie = _closure2_slot10;
                oscard = golfie.getId;
                report = oscard.bind(golfie)();
 390:
                tangon['impression_id'] = report;
                entity['properties'] = tangon;
                entity = michal.bind(zuuluu)(entity);
 405:
                entity = undefined;
                return entity;
            }
        };
        kiloes = oscard.bind(option)(zuuluu, tangon);
        oscard = option.useCallback;
        tangon = new Array(4);
        tangon[0] = yankee;
        tangon[1] = offset;
        tangon[2] = michal;
        tangon[3] = verify;
        zuuluu = function() {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = _closure2_slot9;
                entity = entity.current;
                option = null;
                if(!(option != entity)) { _fun00012_ip = 173; continue _fun00011 }
 21:
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 6;
                entity = zuuluu[entity];
                report = undefined;
                zuuluu = michal.bind(report)(entity);
                michal = zuuluu.trackQuestEvent;
                entity = {};
                golfie = _closure2_slot3;
                entity['questId'] = golfie;
                tangon = _closure1_slot7;
                tangon = tangon.QUEST_VIDEO_TIME_TO_FIRST_FRAME;
                entity['event'] = tangon;
                tangon = {};
                golfie = global;
                verify = golfie.Date;
                golfie = verify.now;
                verify = golfie.bind(verify)();
                golfie = _closure2_slot9;
                golfie = golfie.current;
                golfie = verify - golfie;
                tangon['duration_ms'] = golfie;
                golfie = _closure2_slot5;
                tangon['video_session_id'] = golfie;
                golfie = _closure2_slot4;
                tangon['video_asset_id'] = golfie;
                golfie = _closure2_slot10;
                golfie = option == golfie;
                if(golfie) { _fun00012_ip = 158; continue _fun00011 }
 144:
                golfie = _closure2_slot10;
                oscard = golfie.getId;
                report = oscard.bind(golfie)();
 158:
                tangon['impression_id'] = report;
                entity['properties'] = tangon;
                entity = michal.bind(zuuluu)(entity);
 173:
                entity = undefined;
                return entity;
            }
        };
        tangon = oscard.bind(option)(zuuluu, tangon);
        foxtra = option.useCallback;
        oscard = new Array(3);
        oscard[0] = yankee;
        oscard[1] = offset;
        oscard[2] = verify;
        zuuluu = function() {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                option = _closure1_slot0;
                verify = _closure1_slot2;
                entity = 6;
                michal = verify[entity];
                entity = undefined;
                tangon = option.bind(entity)(michal);
                zuuluu = tangon.trackQuestEvent;
                michal = {};
                oscard = _closure2_slot3;
                michal['questId'] = oscard;
                report = _closure1_slot7;
                report = report.QUEST_VIDEO_RESUMED;
                michal['event'] = report;
                report = {};
                oscard = _closure2_slot8;
                oscard = oscard.current;
                report['video_timestamp_seconds'] = oscard;
                oscard = 10;
                oscard = verify[oscard];
                oscard = option.bind(entity)(oscard);
                oscard = oscard.VideoPauseReason;
                oscard = oscard.PAUSE_BUTTON;
                report['pause_reason'] = oscard;
                oscard = _closure2_slot5;
                report['video_session_id'] = oscard;
                option = _closure2_slot10;
                oscard = null;
                option = oscard == option;
                oscard = undefined;
                if(option) { _fun00014_ip = 143; continue _fun00013 }
 129:
                option = _closure2_slot10;
                golfie = option.getId;
                oscard = golfie.bind(option)();
 143:
                report['impression_id'] = oscard;
                michal['properties'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        zuuluu = foxtra.bind(option)(zuuluu, oscard);
        sizing = option.useCallback;
        foxtra = new Array(4);
        foxtra[0] = yankee;
        foxtra[1] = offset;
        foxtra[2] = entity;
        foxtra[3] = verify;
        oscard = function() {
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                option = _closure1_slot0;
                verify = _closure1_slot2;
                entity = 6;
                michal = verify[entity];
                entity = undefined;
                report = option.bind(entity)(michal);
                tangon = report.trackQuestEvent;
                zuuluu = {};
                golfie = _closure2_slot3;
                zuuluu['questId'] = golfie;
                oscard = _closure1_slot7;
                oscard = oscard.QUEST_VIDEO_PAUSED;
                zuuluu['event'] = oscard;
                oscard = {};
                golfie = _closure2_slot8;
                golfie = golfie.current;
                oscard['video_timestamp_seconds'] = golfie;
                golfie = 10;
                golfie = verify[golfie];
                golfie = option.bind(entity)(golfie);
                golfie = golfie.VideoPauseReason;
                golfie = golfie.PAUSE_BUTTON;
                oscard['reason'] = golfie;
                golfie = _closure2_slot5;
                oscard['video_session_id'] = golfie;
                option = _closure2_slot10;
                golfie = null;
                option = golfie == option;
                golfie = undefined;
                if(option) { _fun00016_ip = 143; continue _fun00015 }
 129:
                verify = _closure2_slot10;
                option = verify.getId;
                golfie = option.bind(verify)();
 143:
                oscard['impression_id'] = golfie;
                zuuluu['properties'] = oscard;
                zuuluu = tangon.bind(report)(zuuluu);
                michal = _closure2_slot11;
                michal = michal.bind(entity)();
                return entity;
            }
        };
        oscard = sizing.bind(option)(oscard, foxtra);
        sizing = option.useCallback;
        foxtra = new Array(5);
        foxtra[0] = output;
        foxtra[1] = yankee;
        foxtra[2] = michal;
        foxtra[3] = offset;
        foxtra[4] = verify;
        michal = function(argFoo) {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                offset = argFoo;
                option = _closure1_slot0;
                verify = _closure1_slot2;
                entity = 6;
                michal = verify[entity];
                entity = undefined;
                tangon = option.bind(entity)(michal);
                zuuluu = tangon.trackQuestEvent;
                michal = {};
                oscard = _closure2_slot3;
                michal['questId'] = oscard;
                report = _closure1_slot7;
                report = report.QUEST_VIDEO_ERROR;
                michal['event'] = report;
                report = {};
                oscard = 7;
                oscard = verify[oscard];
                romeon = option.bind(entity)(oscard);
                yankee = romeon.formatVideoProgressRatio;
                verify = _closure2_slot0;
                oscard = _closure2_slot8;
                foxtra = oscard.current;
                option = null;
                backup = option != foxtra;
                oscard = 0;
                if(!backup) { _fun00018_ip = 110; continue _fun00017 }
 107:
                oscard = foxtra;
 110:
                oscard = yankee.bind(romeon)(verify, oscard);
                report['video_progress'] = oscard;
                report['video_error_type'] = option;
                oscard = _closure2_slot4;
                report['video_asset_id'] = oscard;
                report['network_connection_speed'] = option;
                oscard = _closure2_slot5;
                report['video_session_id'] = oscard;
                verify = option == offset;
                oscard = undefined;
                if(verify) { _fun00018_ip = 172; continue _fun00017 }
 162:
                verify = offset.error;
                oscard = verify.code;
 172:
                report['video_error_code'] = oscard;
                verify = option == offset;
                oscard = undefined;
                if(verify) { _fun00018_ip = 201; continue _fun00017 }
 188:
                verify = offset.error;
                oscard = verify.localizedDescription;
 201:
                if(!(option == oscard)) { _fun00018_ip = 230; continue _fun00017 }
 205:
                yankee = option == offset;
                verify = undefined;
                if(yankee) { _fun00018_ip = 227; continue _fun00017 }
 214:
                offset = offset.error;
                verify = offset.errorString;
 227:
                oscard = verify;
 230:
                report['video_error_message'] = oscard;
                report['video_network_state'] = option;
                oscard = _closure2_slot10;
                option = option == oscard;
                oscard = undefined;
                if(option) { _fun00018_ip = 271; continue _fun00017 }
 257:
                option = _closure2_slot10;
                golfie = option.getId;
                oscard = golfie.bind(option)();
 271:
                report['impression_id'] = oscard;
                michal['properties'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        foxtra = sizing.bind(option)(michal, foxtra);
        sizing = option.useCallback;
        michal = new Array(1);
        michal[0] = entity;
        entity = function() {
            michal = _closure2_slot11;
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
        };
        michal = sizing.bind(option)(entity, michal);
        entity = {};
        entity['handleBufferAnalytics'] = kiloes;
        entity['handleEndAnalytics'] = backup;
        entity['handleErrorAnalytics'] = foxtra;
        entity['handleLoadAnalytics'] = romeon;
        entity['handleLoadStartAnalytics'] = golfie;
        entity['handlePausePlaybackAnalytics'] = oscard;
        golfie = option.useCallback;
        oscard = new Array(3);
        oscard[0] = yankee;
        oscard[1] = offset;
        oscard[2] = verify;
        report = function(argFoo, argBar, argBaz) {
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                michal = _closure2_slot8;
                entity = argBaz;
                michal['current'] = entity;
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 6;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.trackQuestEvent;
                michal = {};
                oscard = _closure2_slot3;
                michal['questId'] = oscard;
                report = _closure1_slot7;
                report = report.QUEST_VIDEO_PROGRESSED;
                michal['event'] = report;
                report = {};
                oscard = argFoo;
                report['progress'] = oscard;
                oscard = argBar;
                report['video_timestamp_seconds'] = oscard;
                oscard = _closure2_slot5;
                report['video_session_id'] = oscard;
                option = _closure2_slot10;
                oscard = null;
                option = oscard == option;
                oscard = undefined;
                if(option) { _fun00020_ip = 129; continue _fun00019 }
 115:
                option = _closure2_slot10;
                golfie = option.getId;
                oscard = golfie.bind(option)();
 129:
                report['impression_id'] = oscard;
                michal['properties'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        report = golfie.bind(option)(report, oscard);
        entity['handleProgressAnalytics'] = report;
        entity['handleReadyForDisplayAnalytics'] = tangon;
        entity['handleResumePlaybackAnalytics'] = zuuluu;
        entity['handleSeekAnalytics'] = michal;
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();