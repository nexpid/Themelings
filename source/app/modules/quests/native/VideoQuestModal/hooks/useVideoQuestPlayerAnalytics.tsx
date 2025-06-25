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
        result = entity.duration;
        var _closure2_slot0 = result;
        zuuluu = entity.isQuestCompleted;
        var _closure2_slot1 = zuuluu;
        sizing = entity.playerState;
        var _closure2_slot2 = sizing;
        romeon = entity.questId;
        var _closure2_slot3 = romeon;
        verify = entity.sourceQuestContent;
        var _closure2_slot4 = verify;
        michal = entity.videoAssetId;
        var _closure2_slot5 = michal;
        yankee = entity.videoSessionId;
        var _closure2_slot6 = yankee;
        option = _closure1_slot4;
        tangon = option.useState;
        output = false;
        tangon = tangon.bind(option)(output);
        kiloes = _closure1_slot3;
        oscard = undefined;
        foxtra = 2;
        tangon = kiloes.bind(oscard)(tangon, foxtra);
        offset = 0;
        backup = tangon[offset];
        golfie = 1;
        tangon = tangon[golfie];
        var _closure2_slot7 = tangon;
        tangon = option.useState;
        tangon = tangon.bind(option)(output);
        tangon = kiloes.bind(oscard)(tangon, foxtra);
        foxtra = tangon[offset];
        tangon = tangon[golfie];
        var _closure2_slot8 = tangon;
        golfie = option.useRef;
        tangon = null;
        golfie = golfie.bind(option)(tangon);
        var _closure2_slot9 = golfie;
        golfie = option.useRef;
        golfie = golfie.bind(option)(tangon);
        var _closure2_slot10 = golfie;
        output = _closure1_slot0;
        echoed = _closure1_slot2;
        golfie = 5;
        golfie = echoed[golfie];
        offset = output.bind(oscard)(golfie);
        golfie = offset.useQuestImpression;
        offset = golfie.bind(offset)();
        var _closure2_slot11 = offset;
        update = option.useEffect;
        kiloes = function() {
            michal = _closure2_slot10;
            entity = global;
            zuuluu = entity.Date;
            entity = zuuluu.now;
            entity = entity.bind(zuuluu)();
            michal['current'] = entity;
            entity = undefined;
            return entity;
        };
        golfie = new Array(0);
        golfie = update.bind(option)(kiloes, golfie);
        update = option.useEffect;
        kiloes = new Array(5);
        kiloes[0] = romeon;
        kiloes[1] = yankee;
        kiloes[2] = sizing;
        kiloes[3] = offset;
        kiloes[4] = verify;
        golfie = function() {
            report = _closure1_slot5;
            tangon = report.addEventListener;
            zuuluu = 'change';
            michal = function(argFoo) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    entity = _closure2_slot9;
                    entity = entity.current;
                    option = null;
                    if(!(option != entity)) { _fun00002_ip = 188; continue _fun00001 }
 21:
                    michal = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 6;
                    entity = zuuluu[entity];
                    oscard = undefined;
                    zuuluu = michal.bind(oscard)(entity);
                    michal = zuuluu.trackQuestEvent;
                    entity = {};
                    report = _closure2_slot3;
                    entity['questId'] = report;
                    verify = 'active';
                    report = argFoo;
                    if(!(verify !== report)) { _fun00002_ip = 86; continue _fun00001 }
 74:
                    report = _closure1_slot7;
                    report = report.QUEST_VIDEO_APP_UNFOCUSED;
                    _fun00002_ip = 96; continue _fun00001;
 86:
                    golfie = _closure1_slot7;
                    report = golfie.QUEST_VIDEO_APP_FOCUSED;
 96:
                    entity['event'] = report;
                    report = {};
                    golfie = _closure2_slot9;
                    golfie = golfie.current;
                    report['video_timestamp_seconds'] = golfie;
                    golfie = _closure2_slot2;
                    report['video_state'] = golfie;
                    golfie = _closure2_slot6;
                    report['video_session_id'] = golfie;
                    golfie = _closure2_slot11;
                    golfie = option == golfie;
                    oscard = undefined;
                    if(golfie) { _fun00002_ip = 164; continue _fun00001 }
 150:
                    option = _closure2_slot11;
                    golfie = option.getId;
                    oscard = golfie.bind(option)();
 164:
                    report['impression_id'] = oscard;
                    entity['properties'] = report;
                    tangon = _closure2_slot4;
                    entity['sourceQuestContent'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 188:
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
        golfie = update.bind(option)(golfie, kiloes);
        kiloes = option.useCallback;
        golfie = new Array(7);
        golfie[0] = romeon;
        golfie[1] = michal;
        golfie[2] = zuuluu;
        golfie[3] = yankee;
        golfie[4] = result;
        golfie[5] = offset;
        golfie[6] = verify;
        zuuluu = function(argFoo) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                oscard = argFoo;
                entity = _closure2_slot9;
                entity = entity.current;
                option = null;
                if(!(option != entity)) { _fun00004_ip = 250; continue _fun00003 }
 24:
                offset = _closure1_slot0;
                yankee = _closure1_slot2;
                entity = 6;
                entity = yankee[entity];
                golfie = undefined;
                zuuluu = offset.bind(golfie)(entity);
                michal = zuuluu.trackQuestEvent;
                entity = {};
                verify = _closure2_slot3;
                entity['questId'] = verify;
                report = _closure1_slot7;
                report = report.QUEST_VIDEO_SEGMENT_WATCHED;
                entity['event'] = report;
                report = {};
                backup = report;
                foxtra = oscard;
                verify = copyDataProperties(backup, foxtra);
                romeon = _closure2_slot5;
                verify = 'video_asset_id';
                report[verify] = romeon;
                romeon = _closure2_slot1;
                verify = 'quest_completed';
                report[verify] = romeon;
                romeon = _closure2_slot0;
                verify = 'video_duration_sec';
                report[verify] = romeon;
                verify = 7;
                verify = yankee[verify];
                yankee = offset.bind(golfie)(verify);
                offset = yankee.formatVideoProgressRatio;
                verify = oscard.segment_end_sec;
                oscard = _closure2_slot9;
                oscard = oscard.current;
                verify = offset.bind(yankee)(verify, oscard);
                oscard = 'video_progress';
                report[oscard] = verify;
                verify = _closure2_slot6;
                oscard = 'video_session_id';
                report[oscard] = verify;
                oscard = _closure2_slot11;
                oscard = option == oscard;
                if(oscard) { _fun00004_ip = 222; continue _fun00003 }
 208:
                option = _closure2_slot11;
                oscard = option.getId;
                golfie = oscard.bind(option)();
 222:
                oscard = 'impression_id';
                report[oscard] = golfie;
                entity['properties'] = report;
                tangon = _closure2_slot4;
                entity['sourceQuestContent'] = tangon;
                entity = michal.bind(zuuluu)(entity);
 250:
                entity = undefined;
                return entity;
            }
        };
        golfie = kiloes.bind(option)(zuuluu, golfie);
        update = option.useCallback;
        kiloes = function() {
            entity = _closure2_slot9;
            entity = entity.current;
            return entity;
        };
        zuuluu = new Array(0);
        kiloes = update.bind(option)(kiloes, zuuluu);
        zuuluu = _closure1_slot1;
        entity = 8;
        entity = echoed[entity];
        zuuluu = zuuluu.bind(oscard)(entity);
        entity = {};
        entity['getCurrentVideoTime'] = kiloes;
        kiloes = 9;
        kiloes = echoed[kiloes];
        kiloes = output.bind(oscard)(kiloes);
        kiloes = kiloes.PlayerState;
        kiloes = kiloes.PLAYING;
        kiloes = sizing === kiloes;
        entity['isPlaying'] = kiloes;
        entity['isMetadataLoaded'] = backup;
        entity['isInitialSeekComplete'] = foxtra;
        entity['onAnalytics'] = golfie;
        golfie = 4000;
        entity['emitIntervalMs'] = golfie;
        golfie = 2000;
        entity['minSegmentDurationMs'] = golfie;
        entity = zuuluu.bind(oscard)(entity);
        entity = entity.forceSendCurrentSegment;
        var _closure2_slot12 = entity;
        zuuluu = option.useRef;
        zuuluu = zuuluu.bind(option)(tangon);
        var _closure2_slot13 = zuuluu;
        golfie = option.useCallback;
        oscard = new Array(5);
        oscard[0] = romeon;
        oscard[1] = michal;
        oscard[2] = yankee;
        oscard[3] = offset;
        oscard[4] = verify;
        zuuluu = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = _closure2_slot7;
                entity = undefined;
                zuuluu = true;
                michal = michal.bind(entity)(zuuluu);
                michal = _closure2_slot8;
                michal = michal.bind(entity)(zuuluu);
                michal = _closure2_slot13;
                michal = michal.current;
                option = null;
                michal = option != michal;
                golfie = null;
                if(!michal) { _fun00006_ip = 75; continue _fun00005 }
 45:
                michal = global;
                zuuluu = michal.Date;
                michal = zuuluu.now;
                zuuluu = michal.bind(zuuluu)();
                michal = _closure2_slot13;
                michal = michal.current;
                golfie = zuuluu - michal;
 75:
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 6;
                michal = tangon[michal];
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.trackQuestEvent;
                michal = {};
                oscard = _closure2_slot3;
                michal['questId'] = oscard;
                oscard = _closure1_slot7;
                oscard = oscard.QUEST_VIDEO_LOADING_ENDED;
                michal['event'] = oscard;
                oscard = {};
                offset = _closure2_slot5;
                oscard['video_asset_id'] = offset;
                offset = _closure1_slot6;
                verify = offset.getEffectiveConnectionSpeed;
                verify = verify.bind(offset)();
                oscard['network_connection_speed'] = verify;
                oscard['duration'] = golfie;
                golfie = _closure2_slot6;
                oscard['video_session_id'] = golfie;
                golfie = _closure2_slot11;
                option = option == golfie;
                golfie = undefined;
                if(option) { _fun00006_ip = 200; continue _fun00005 }
 186:
                verify = _closure2_slot11;
                option = verify.getId;
                golfie = option.bind(verify)();
 200:
                oscard['impression_id'] = golfie;
                michal['properties'] = oscard;
                report = _closure2_slot4;
                michal['sourceQuestContent'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        foxtra = golfie.bind(option)(zuuluu, oscard);
        golfie = option.useCallback;
        oscard = new Array(1);
        oscard[0] = entity;
        zuuluu = function() {
            michal = _closure2_slot12;
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
        };
        kiloes = golfie.bind(option)(zuuluu, oscard);
        golfie = option.useCallback;
        oscard = new Array(5);
        oscard[0] = romeon;
        oscard[1] = yankee;
        oscard[2] = michal;
        oscard[3] = offset;
        oscard[4] = verify;
        zuuluu = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = _closure2_slot13;
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
                oscard = _closure2_slot3;
                michal['questId'] = oscard;
                oscard = _closure1_slot7;
                oscard = oscard.QUEST_VIDEO_LOADING_STARTED;
                michal['event'] = oscard;
                oscard = {};
                option = _closure2_slot5;
                oscard['video_asset_id'] = option;
                option = _closure1_slot6;
                golfie = option.getEffectiveConnectionSpeed;
                golfie = golfie.bind(option)();
                oscard['network_connection_speed'] = golfie;
                golfie = _closure2_slot6;
                oscard['video_session_id'] = golfie;
                golfie = true;
                oscard['is_hls_supported'] = golfie;
                option = _closure2_slot11;
                golfie = null;
                option = golfie == option;
                golfie = undefined;
                if(option) { _fun00008_ip = 164; continue _fun00007 }
 150:
                verify = _closure2_slot11;
                option = verify.getId;
                golfie = option.bind(verify)();
 164:
                oscard['impression_id'] = golfie;
                michal['properties'] = oscard;
                report = _closure2_slot4;
                michal['sourceQuestContent'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        golfie = golfie.bind(option)(zuuluu, oscard);
        zuuluu = option.useRef;
        zuuluu = zuuluu.bind(option)(tangon);
        var _closure2_slot14 = zuuluu;
        tangon = option.useRef;
        zuuluu = -1;
        zuuluu = tangon.bind(option)(zuuluu);
        var _closure2_slot15 = zuuluu;
        oscard = option.useCallback;
        tangon = new Array(5);
        tangon[0] = romeon;
        tangon[1] = michal;
        tangon[2] = yankee;
        tangon[3] = offset;
        tangon[4] = verify;
        zuuluu = function(argFoo) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = argFoo;
                entity = entity.isBuffering;
                zuuluu = _closure1_slot6;
                michal = zuuluu.getEffectiveConnectionSpeed;
                option = michal.bind(zuuluu)();
                michal = _closure2_slot14;
                if(entity) { _fun00010_ip = 236; continue _fun00009 }
 39:
                entity = michal.current;
                yankee = null;
                entity = yankee != entity;
                offset = null;
                if(!entity) { _fun00010_ip = 85; continue _fun00009 }
 55:
                entity = global;
                zuuluu = entity.Date;
                entity = zuuluu.now;
                zuuluu = entity.bind(zuuluu)();
                entity = _closure2_slot14;
                entity = entity.current;
                offset = zuuluu - entity;
 85:
                zuuluu = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 6;
                entity = oscard[entity];
                verify = undefined;
                oscard = zuuluu.bind(verify)(entity);
                zuuluu = oscard.trackQuestEvent;
                entity = {};
                golfie = _closure2_slot3;
                entity['questId'] = golfie;
                golfie = _closure1_slot7;
                golfie = golfie.QUEST_VIDEO_BUFFERING_ENDED;
                entity['event'] = golfie;
                golfie = {};
                romeon = _closure2_slot5;
                golfie['video_asset_id'] = romeon;
                golfie['network_connection_speed'] = option;
                golfie['duration'] = offset;
                offset = _closure2_slot15;
                offset = offset.current;
                golfie['buffer_index'] = offset;
                offset = _closure2_slot6;
                golfie['video_session_id'] = offset;
                offset = _closure2_slot11;
                offset = yankee == offset;
                if(offset) { _fun00010_ip = 207; continue _fun00009 }
 193:
                yankee = _closure2_slot11;
                offset = yankee.getId;
                verify = offset.bind(yankee)();
 207:
                golfie['impression_id'] = verify;
                entity['properties'] = golfie;
                golfie = _closure2_slot4;
                entity['sourceQuestContent'] = golfie;
                entity = zuuluu.bind(oscard)(entity);
                _fun00010_ip = 421; continue _fun00009;
 236:
                entity = global;
                zuuluu = entity.Date;
                entity = zuuluu.now;
                entity = entity.bind(zuuluu)();
                michal['current'] = entity;
                golfie = _closure2_slot15;
                michal = golfie.current;
                entity = 1;
                entity = michal + entity;
                golfie['current'] = entity;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 6;
                entity = zuuluu[entity];
                oscard = undefined;
                zuuluu = michal.bind(oscard)(entity);
                michal = zuuluu.trackQuestEvent;
                entity = {};
                verify = _closure2_slot3;
                entity['questId'] = verify;
                report = _closure1_slot7;
                report = report.QUEST_VIDEO_BUFFERING_STARTED;
                entity['event'] = report;
                report = {};
                verify = _closure2_slot5;
                report['video_asset_id'] = verify;
                report['network_connection_speed'] = option;
                golfie = golfie.current;
                report['buffer_index'] = golfie;
                golfie = _closure2_slot6;
                report['video_session_id'] = golfie;
                option = _closure2_slot11;
                golfie = null;
                golfie = golfie == option;
                if(golfie) { _fun00010_ip = 397; continue _fun00009 }
 383:
                option = _closure2_slot11;
                golfie = option.getId;
                oscard = golfie.bind(option)();
 397:
                report['impression_id'] = oscard;
                entity['properties'] = report;
                tangon = _closure2_slot4;
                entity['sourceQuestContent'] = tangon;
                entity = michal.bind(zuuluu)(entity);
 421:
                entity = undefined;
                return entity;
            }
        };
        sizing = oscard.bind(option)(zuuluu, tangon);
        oscard = option.useCallback;
        tangon = new Array(5);
        tangon[0] = romeon;
        tangon[1] = yankee;
        tangon[2] = michal;
        tangon[3] = offset;
        tangon[4] = verify;
        zuuluu = function() {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = _closure2_slot10;
                entity = entity.current;
                option = null;
                if(!(option != entity)) { _fun00012_ip = 182; continue _fun00011 }
 21:
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 6;
                entity = zuuluu[entity];
                oscard = undefined;
                zuuluu = michal.bind(oscard)(entity);
                michal = zuuluu.trackQuestEvent;
                entity = {};
                golfie = _closure2_slot3;
                entity['questId'] = golfie;
                report = _closure1_slot7;
                report = report.QUEST_VIDEO_TIME_TO_FIRST_FRAME;
                entity['event'] = report;
                report = {};
                golfie = global;
                verify = golfie.Date;
                golfie = verify.now;
                verify = golfie.bind(verify)();
                golfie = _closure2_slot10;
                golfie = golfie.current;
                golfie = verify - golfie;
                report['duration_ms'] = golfie;
                golfie = _closure2_slot6;
                report['video_session_id'] = golfie;
                golfie = _closure2_slot5;
                report['video_asset_id'] = golfie;
                golfie = _closure2_slot11;
                golfie = option == golfie;
                if(golfie) { _fun00012_ip = 158; continue _fun00011 }
 144:
                option = _closure2_slot11;
                golfie = option.getId;
                oscard = golfie.bind(option)();
 158:
                report['impression_id'] = oscard;
                entity['properties'] = report;
                tangon = _closure2_slot4;
                entity['sourceQuestContent'] = tangon;
                entity = michal.bind(zuuluu)(entity);
 182:
                entity = undefined;
                return entity;
            }
        };
        tangon = oscard.bind(option)(zuuluu, tangon);
        backup = option.useCallback;
        oscard = new Array(4);
        oscard[0] = romeon;
        oscard[1] = yankee;
        oscard[2] = offset;
        oscard[3] = verify;
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
                golfie = _closure2_slot3;
                michal['questId'] = golfie;
                oscard = _closure1_slot7;
                oscard = oscard.QUEST_VIDEO_RESUMED;
                michal['event'] = oscard;
                oscard = {};
                golfie = _closure2_slot9;
                golfie = golfie.current;
                oscard['video_timestamp_seconds'] = golfie;
                golfie = 10;
                golfie = verify[golfie];
                golfie = option.bind(entity)(golfie);
                golfie = golfie.VideoPauseReason;
                golfie = golfie.PAUSE_BUTTON;
                oscard['pause_reason'] = golfie;
                golfie = _closure2_slot6;
                oscard['video_session_id'] = golfie;
                option = _closure2_slot11;
                golfie = null;
                option = golfie == option;
                golfie = undefined;
                if(option) { _fun00014_ip = 143; continue _fun00013 }
 129:
                verify = _closure2_slot11;
                option = verify.getId;
                golfie = option.bind(verify)();
 143:
                oscard['impression_id'] = golfie;
                michal['properties'] = oscard;
                report = _closure2_slot4;
                michal['sourceQuestContent'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        zuuluu = backup.bind(option)(zuuluu, oscard);
        output = option.useCallback;
        backup = new Array(5);
        backup[0] = romeon;
        backup[1] = yankee;
        backup[2] = entity;
        backup[3] = offset;
        backup[4] = verify;
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
                golfie = _closure2_slot9;
                golfie = golfie.current;
                oscard['video_timestamp_seconds'] = golfie;
                golfie = 10;
                golfie = verify[golfie];
                golfie = option.bind(entity)(golfie);
                golfie = golfie.VideoPauseReason;
                golfie = golfie.PAUSE_BUTTON;
                oscard['reason'] = golfie;
                golfie = _closure2_slot6;
                oscard['video_session_id'] = golfie;
                option = _closure2_slot11;
                golfie = null;
                option = golfie == option;
                golfie = undefined;
                if(option) { _fun00016_ip = 143; continue _fun00015 }
 129:
                verify = _closure2_slot11;
                option = verify.getId;
                golfie = option.bind(verify)();
 143:
                oscard['impression_id'] = golfie;
                zuuluu['properties'] = oscard;
                oscard = _closure2_slot4;
                zuuluu['sourceQuestContent'] = oscard;
                zuuluu = tangon.bind(report)(zuuluu);
                michal = _closure2_slot12;
                michal = michal.bind(entity)();
                return entity;
            }
        };
        oscard = output.bind(option)(oscard, backup);
        output = option.useCallback;
        backup = new Array(6);
        backup[0] = result;
        backup[1] = romeon;
        backup[2] = michal;
        backup[3] = yankee;
        backup[4] = offset;
        backup[5] = verify;
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
                golfie = _closure2_slot3;
                michal['questId'] = golfie;
                oscard = _closure1_slot7;
                oscard = oscard.QUEST_VIDEO_ERROR;
                michal['event'] = oscard;
                oscard = {};
                golfie = 7;
                golfie = verify[golfie];
                romeon = option.bind(entity)(golfie);
                yankee = romeon.formatVideoProgressRatio;
                verify = _closure2_slot0;
                golfie = _closure2_slot9;
                foxtra = golfie.current;
                option = null;
                backup = option != foxtra;
                golfie = 0;
                if(!backup) { _fun00018_ip = 110; continue _fun00017 }
 107:
                golfie = foxtra;
 110:
                golfie = yankee.bind(romeon)(verify, golfie);
                oscard['video_progress'] = golfie;
                oscard['video_error_type'] = option;
                golfie = _closure2_slot5;
                oscard['video_asset_id'] = golfie;
                oscard['network_connection_speed'] = option;
                golfie = _closure2_slot6;
                oscard['video_session_id'] = golfie;
                verify = option == offset;
                golfie = undefined;
                if(verify) { _fun00018_ip = 170; continue _fun00017 }
 160:
                verify = offset.error;
                golfie = verify.code;
 170:
                oscard['video_error_code'] = golfie;
                verify = option == offset;
                golfie = undefined;
                if(verify) { _fun00018_ip = 199; continue _fun00017 }
 186:
                verify = offset.error;
                golfie = verify.localizedDescription;
 199:
                if(!(option == golfie)) { _fun00018_ip = 228; continue _fun00017 }
 203:
                yankee = option == offset;
                verify = undefined;
                if(yankee) { _fun00018_ip = 225; continue _fun00017 }
 212:
                offset = offset.error;
                verify = offset.errorString;
 225:
                golfie = verify;
 228:
                oscard['video_error_message'] = golfie;
                oscard['video_network_state'] = option;
                golfie = _closure2_slot11;
                option = option == golfie;
                golfie = undefined;
                if(option) { _fun00018_ip = 269; continue _fun00017 }
 255:
                verify = _closure2_slot11;
                option = verify.getId;
                golfie = option.bind(verify)();
 269:
                oscard['impression_id'] = golfie;
                michal['properties'] = oscard;
                report = _closure2_slot4;
                michal['sourceQuestContent'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        backup = output.bind(option)(michal, backup);
        output = option.useCallback;
        michal = new Array(1);
        michal[0] = entity;
        entity = function() {
            michal = _closure2_slot12;
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
        };
        michal = output.bind(option)(entity, michal);
        entity = {};
        entity['handleBufferAnalytics'] = sizing;
        entity['handleEndAnalytics'] = kiloes;
        entity['handleErrorAnalytics'] = backup;
        entity['handleLoadAnalytics'] = foxtra;
        entity['handleLoadStartAnalytics'] = golfie;
        entity['handlePausePlaybackAnalytics'] = oscard;
        golfie = option.useCallback;
        oscard = new Array(4);
        oscard[0] = romeon;
        oscard[1] = yankee;
        oscard[2] = offset;
        oscard[3] = verify;
        report = function(argFoo, argBar, argBaz) {
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                michal = _closure2_slot9;
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
                golfie = _closure2_slot3;
                michal['questId'] = golfie;
                oscard = _closure1_slot7;
                oscard = oscard.QUEST_VIDEO_PROGRESSED;
                michal['event'] = oscard;
                oscard = {};
                golfie = argFoo;
                oscard['progress'] = golfie;
                golfie = argBar;
                oscard['video_timestamp_seconds'] = golfie;
                golfie = _closure2_slot6;
                oscard['video_session_id'] = golfie;
                option = _closure2_slot11;
                golfie = null;
                option = golfie == option;
                golfie = undefined;
                if(option) { _fun00020_ip = 129; continue _fun00019 }
 115:
                verify = _closure2_slot11;
                option = verify.getId;
                golfie = option.bind(verify)();
 129:
                oscard['impression_id'] = golfie;
                michal['properties'] = oscard;
                report = _closure2_slot4;
                michal['sourceQuestContent'] = report;
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