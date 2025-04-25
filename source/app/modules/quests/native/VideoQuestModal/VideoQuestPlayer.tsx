// app/modules/quests/native/VideoQuestModal/VideoQuestPlayer.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    report = golfie[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(report);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    report = tangon.View;
    var _closure1_slot5 = report;
    romeon = tangon.StyleSheet;
    tangon = tangon.Pressable;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = golfie[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.AppStates;
    var _closure1_slot9 = tangon;
    tangon = 6;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    report = tangon.jsx;
    var _closure1_slot10 = report;
    tangon = tangon.jsxs;
    var _closure1_slot11 = tangon;
    tangon = {};
    report = 'function hasVideoEnded_VideoQuestPlayerTsx1(currentTime,videoDuration){return currentTime>=videoDuration;}';
    tangon['code'] = report;
    var _closure1_slot12 = tangon;
    tangon = function() {
        entity = function(argFoo, argBar) { // Original name: hasVideoEnded
            michal = argFoo;
            entity = argBar;
            entity = michal >= entity;
            return entity;
        };
        michal = {};
        entity['__closure'] = michal;
        michal = 13640509591212.0;
        entity['__workletHash'] = michal;
        michal = _closure1_slot12;
        entity['__initData'] = michal;
        return entity;
    };
    verify = tangon.bind(entity)();
    var _closure1_slot13 = verify;
    report = {};
    tangon = 'function VideoQuestPlayerTsx2(currentTime,maxTimestamp,videoDuration,isQuestCompleted){const{hasVideoEnded}=this.__closure;return!hasVideoEnded(currentTime,videoDuration)&&(isQuestCompleted||currentTime<=maxTimestamp-1);}';
    report['code'] = tangon;
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: t
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            michal = argCor;
            report = _closure1_slot13;
            zuuluu = undefined;
            entity = argBaz;
            entity = report.bind(zuuluu)(tangon, entity);
            entity = !entity;
            if(!entity) { _fun00002_ip = 50; continue _fun00001 }
 30:
            if(michal) { _fun00002_ip = 47; continue _fun00001 }
 33:
            report = argBar;
            zuuluu = 1;
            zuuluu = report - zuuluu;
            michal = tangon <= zuuluu;
 47:
            entity = michal;
 50:
            return entity;
        }
    };
    option = {};
    option['hasVideoEnded'] = verify;
    tangon['__closure'] = option;
    option = 6684695599942.0;
    tangon['__workletHash'] = option;
    tangon['__initData'] = report;
    var _closure1_slot14 = tangon;
    tangon = 7;
    tangon = golfie[tangon];
    option = oscard.bind(entity)(tangon);
    report = option.createStyles;
    tangon = {};
    verify = {};
    output = romeon.absoluteFillObject;
    result = verify;
    offset = copyDataProperties(result, output);
    offset = 8;
    foxtra = golfie[offset];
    foxtra = yankee.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    backup = foxtra.BG_BASE_TERTIARY;
    foxtra = 'backgroundColor';
    verify[foxtra] = backup;
    tangon['container'] = verify;
    verify = {'height': '100%', 'width': '100%'};
    tangon['video'] = verify;
    verify = {'position': 'relative', 'height': '100%', 'width': '100%'};
    tangon['videoContainer'] = verify;
    verify = {};
    output = romeon.absoluteFillObject;
    result = verify;
    romeon = copyDataProperties(result, output);
    romeon = 9;
    romeon = golfie[romeon];
    backup = yankee.bind(entity)(romeon);
    romeon = golfie[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.unsafe_rawColors;
    romeon = romeon.BLACK_500;
    kiloes = backup.bind(entity)(romeon);
    backup = kiloes.alpha;
    romeon = 0.5;
    backup = backup.bind(kiloes)(romeon);
    romeon = backup.hex;
    romeon = romeon.bind(backup)();
    verify[foxtra] = romeon;
    foxtra = 'center';
    romeon = 'justifyContent';
    verify[romeon] = foxtra;
    romeon = 'alignItems';
    verify[romeon] = foxtra;
    foxtra = 'column';
    romeon = 'flexDirection';
    verify[romeon] = foxtra;
    romeon = golfie[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.spacing;
    foxtra = romeon.PX_24;
    romeon = 'gap';
    verify[romeon] = foxtra;
    tangon['controls'] = verify;
    verify = {'flex': 1, 'flexDirection': 'row', 'justifyContent': 'flex-end', 'width': '100%'};
    romeon = golfie[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.spacing;
    romeon = romeon.PX_16;
    verify['padding'] = romeon;
    romeon = golfie[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.spacing;
    romeon = romeon.PX_16;
    verify['gap'] = romeon;
    tangon['controlsTopBottom'] = verify;
    verify = {'justifyContent': 'center', 'alignItems': 'center', 'flexGrow': 1, 'flexDirection': 'row'};
    romeon = golfie[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.spacing;
    romeon = romeon.PX_24;
    verify['gap'] = romeon;
    tangon['controlsMiddle'] = verify;
    verify = {'position': 'absolute', 'bottom': 0, 'right': 0, 'left': 0, 'justifyContent': 'flex-end', 'height': null, 'overflow': 'hidden'};
    romeon = golfie[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.spacing;
    romeon = romeon.PX_16;
    verify['height'] = romeon;
    tangon['progressContainer'] = verify;
    verify = {'height': 1, 'backgroundColor': null, 'shadowOffset': null, 'shadowRadius': 6, 'shadowOpacity': 1, 'elevation': 5, 'shadowColor': '#FFFFFF'};
    romeon = golfie[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.WHITE;
    verify['backgroundColor'] = romeon;
    romeon = {'width': 0, 'height': 0};
    verify['shadowOffset'] = romeon;
    tangon['progress'] = verify;
    verify = {};
    romeon = golfie[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.TEXT_NORMAL;
    verify['color'] = romeon;
    tangon['icon'] = verify;
    verify = {};
    offset = golfie[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.TEXT_SECONDARY;
    verify['color'] = offset;
    tangon['iconDisabled'] = verify;
    tangon = report.bind(option)(tangon);
    var _closure1_slot15 = tangon;
    tangon = {};
    report = 'paused';
    tangon['PAUSED'] = report;
    report = 'playing';
    tangon['PLAYING'] = report;
    report = 'ended';
    tangon['ENDED'] = report;
    report = 'loading';
    tangon['LOADING'] = report;
    var _closure1_slot16 = tangon;
    report = {};
    option = "function VideoQuestPlayerTsx3(){const{showControls,playerState,PlayerState,isVideoEnded,withSpring,SUBTLE_SPRING}=this.__closure;const show=showControls.get()||playerState!==PlayerState.PLAYING||isVideoEnded;return{opacity:withSpring(show?1:0,SUBTLE_SPRING),pointerEvents:show?'auto':'none'};}";
    report['code'] = option;
    var _closure1_slot17 = report;
    report = {};
    option = 'function VideoQuestPlayerTsx4(){const{withTiming,progress,timingFast}=this.__closure;return{width:withTiming(progress.get()*100+"%",timingFast,\'animate-always\')};}';
    report['code'] = option;
    var _closure1_slot18 = report;
    report = 36;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/quests/native/VideoQuestModal/VideoQuestPlayer.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['PlayerState'] = tangon;
    michal = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            golfie = entity.style;
            config = entity.onLoad;
            var _closure2_slot0 = config;
            kiloes = entity.orientation;
            vacuum = entity.safeAreaInsets;
            quebec = entity.handleToggleCaptions;
            status = entity.handleOpenTranscript;
            variable38 = entity.captionsEnabled;
            report = undefined;
            if(!(variable38 === report)) { _fun00004_ip = 58; continue _fun00003 }
 56:
            variable38 = false;
 58:
            var _closure2_slot1 = report;
            var _closure2_slot2 = report;
            var _closure2_slot3 = report;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            var _closure2_slot7 = report;
            var _closure2_slot8 = report;
            var _closure2_slot9 = report;
            var _closure2_slot10 = report;
            var _closure2_slot11 = report;
            var _closure2_slot12 = report;
            var _closure2_slot13 = report;
            var _closure2_slot14 = report;
            var _closure2_slot15 = report;
            var _closure2_slot16 = report;
            var _closure2_slot17 = report;
            var _closure2_slot18 = report;
            var _closure2_slot19 = report;
            var _closure2_slot20 = report;
            var _closure2_slot21 = report;
            var _closure2_slot22 = report;
            var _closure2_slot23 = report;
            var _closure2_slot24 = report;
            var _closure2_slot25 = report;
            var _closure2_slot26 = report;
            var _closure2_slot27 = report;
            entity = _closure1_slot15;
            sizing = entity.bind(report)();
            tangon = _closure1_slot4;
            zuuluu = tangon.useRef;
            entity = null;
            variable42 = zuuluu.bind(tangon)(entity);
            _closure2_slot1 = variable42;
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            verify = 10;
            zuuluu = oscard[verify];
            option = tangon.bind(report)(zuuluu);
            zuuluu = option.useVideoQuestModalContext;
            zuuluu = zuuluu.bind(option)();
            ctrled = zuuluu.quest;
            _closure2_slot2 = ctrled;
            foxtra = zuuluu.videoSessionId;
            zuuluu = 11;
            zuuluu = oscard[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.useQuestTaskDetails;
            variable43 = zuuluu.bind(tangon)(ctrled);
            _closure2_slot3 = variable43;
            tangon = ctrled.userStatus;
            oscard = entity == tangon;
            zuuluu = undefined;
            if(oscard) { _fun00004_ip = 291; continue _fun00003 }
 285:
            zuuluu = tangon.completedAt;
 291:
            variable46 = entity != zuuluu;
            _closure2_slot4 = variable46;
            offset = _closure1_slot0;
            zuuluu = _closure1_slot2;
            oscard = 12;
            tangon = zuuluu[oscard];
            yankee = offset.bind(report)(tangon);
            option = yankee.resolveVideoQuestAsset;
            tangon = zuuluu[oscard];
            tangon = offset.bind(report)(tangon);
            tangon = tangon.VideoQuestAssetId;
            tangon = tangon.VIDEO_PLAYER_VIDEO;
            variable44 = option.bind(yankee)(tangon, ctrled);
            tangon = zuuluu[oscard];
            option = offset.bind(report)(tangon);
            tangon = option.resolveVideoQuestAsset;
            zuuluu = zuuluu[oscard];
            zuuluu = offset.bind(report)(zuuluu);
            zuuluu = zuuluu.VideoQuestAssetId;
            zuuluu = zuuluu.VIDEO_PLAYER_VIDEO_HLS;
            variable45 = tangon.bind(option)(zuuluu, ctrled);
            tangon = entity == variable45;
            zuuluu = undefined;
            if(tangon) { _fun00004_ip = 408; continue _fun00003 }
 403:
            zuuluu = variable45.url;
 408:
            if(!(entity == zuuluu)) { _fun00004_ip = 443; continue _fun00003 }
 412:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[oscard];
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.VideoQuestAssetId;
            romeon = zuuluu.VIDEO_PLAYER_VIDEO;
            _fun00004_ip = 472; continue _fun00003;
 443:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[oscard];
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.VideoQuestAssetId;
            romeon = zuuluu.VIDEO_PLAYER_VIDEO_HLS;
 472:
            output = _closure1_slot4;
            tangon = output.useState;
            zuuluu = variable43.targetSeconds;
            zuuluu = tangon.bind(output)(zuuluu);
            yankee = _closure1_slot3;
            option = 2;
            zuuluu = yankee.bind(report)(zuuluu, option);
            source = 0;
            target = zuuluu[source];
            _closure2_slot5 = target;
            oscard = 1;
            zuuluu = zuuluu[oscard];
            _closure2_slot6 = zuuluu;
            offset = _closure1_slot8;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.setVideoProgress;
                return entity;
            };
            variable37 = offset.bind(report)(zuuluu);
            _closure2_slot7 = variable37;
            tangon = _closure1_slot0;
            result = _closure1_slot2;
            zuuluu = 13;
            zuuluu = result[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = zuuluu.shallow;
            zuuluu = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = argFoo;
                    michal = entity.videoProgress;
                    entity = _closure2_slot2;
                    entity = entity.id;
                    entity = michal[entity];
                    michal = null;
                    if(!(michal == entity)) { _fun00006_ip = 59; continue _fun00005 }
 31:
                    michal = {};
                    tangon = _closure2_slot3;
                    tangon = tangon.progressSeconds;
                    michal['timestampSec'] = tangon;
                    zuuluu = _closure2_slot5;
                    michal['duration'] = zuuluu;
                    entity = michal;
 59:
                    return entity;
                }
            };
            echoed = offset.bind(report)(zuuluu, tangon);
            _closure2_slot8 = echoed;
            tangon = output.useState;
            zuuluu = _closure1_slot16;
            zuuluu = zuuluu.PAUSED;
            zuuluu = tangon.bind(output)(zuuluu);
            tangon = yankee.bind(report)(zuuluu, option);
            zuuluu = tangon[source];
            _closure2_slot9 = zuuluu;
            tangon = tangon[oscard];
            _closure2_slot10 = tangon;
            tangon = output.useState;
            offset = false;
            tangon = tangon.bind(output)(offset);
            tangon = yankee.bind(report)(tangon, option);
            whisks = tangon[source];
            tangon = tangon[oscard];
            _closure2_slot11 = tangon;
            if(!whisks) { _fun00004_ip = 685; continue _fun00003 }
 664:
            option = _closure1_slot13;
            oscard = echoed.timestampSec;
            tangon = echoed.duration;
            whisks = option.bind(report)(oscard, tangon);
 685:
            _closure2_slot12 = whisks;
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            result = 14;
            tangon = option[result];
            yankee = oscard.bind(report)(tangon);
            tangon = yankee.useSharedValue;
            variable39 = tangon.bind(yankee)(offset);
            _closure2_slot13 = variable39;
            tangon = option[result];
            output = oscard.bind(report)(tangon);
            yankee = output.useAnimatedStyle;
            tangon = function() { // Original name: O
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = _closure2_slot13;
                    michal = zuuluu.get;
                    zuuluu = michal.bind(zuuluu)();
                    if(zuuluu) { _fun00008_ip = 40; continue _fun00007 }
 19:
                    tangon = _closure2_slot9;
                    michal = _closure1_slot16;
                    michal = michal.PLAYING;
                    zuuluu = tangon !== michal;
 40:
                    if(zuuluu) { _fun00008_ip = 47; continue _fun00007 }
 43:
                    zuuluu = _closure2_slot12;
 47:
                    entity = {};
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 15;
                    tangon = oscard[tangon];
                    option = undefined;
                    oscard = report.bind(option)(tangon);
                    report = oscard.withSpring;
                    tangon = 0;
                    if(!zuuluu) { _fun00008_ip = 87; continue _fun00007 }
 84:
                    tangon = 1;
 87:
                    golfie = _closure1_slot0;
                    verify = _closure1_slot2;
                    michal = 16;
                    michal = verify[michal];
                    michal = golfie.bind(option)(michal);
                    michal = michal.SUBTLE_SPRING;
                    michal = report.bind(oscard)(tangon, michal);
                    entity['opacity'] = michal;
                    michal = 'none';
                    if(!zuuluu) { _fun00008_ip = 134; continue _fun00007 }
 130:
                    michal = 'auto';
 134:
                    entity['pointerEvents'] = michal;
                    return entity;
                }
            };
            update = {};
            update['showControls'] = variable39;
            update['playerState'] = zuuluu;
            sequen = _closure1_slot16;
            update['PlayerState'] = sequen;
            update['isVideoEnded'] = whisks;
            sequen = 15;
            sequen = option[sequen];
            sequen = oscard.bind(report)(sequen);
            sequen = sequen.withSpring;
            update['withSpring'] = sequen;
            sequen = 16;
            sequen = option[sequen];
            sequen = oscard.bind(report)(sequen);
            sequen = sequen.SUBTLE_SPRING;
            update['SUBTLE_SPRING'] = sequen;
            tangon['__closure'] = update;
            update = 5034187678759.0;
            tangon['__workletHash'] = update;
            update = _closure1_slot17;
            tangon['__initData'] = update;
            update = yankee.bind(output)(tangon);
            tangon = option[result];
            yankee = oscard.bind(report)(tangon);
            tangon = yankee.useSharedValue;
            variable48 = tangon.bind(yankee)(source);
            _closure2_slot14 = variable48;
            tangon = option[result];
            output = oscard.bind(report)(tangon);
            yankee = output.useAnimatedStyle;
            tangon = function() { // Original name: Q
                entity = {};
                golfie = _closure1_slot0;
                option = _closure1_slot2;
                michal = 17;
                michal = option[michal];
                tangon = undefined;
                oscard = golfie.bind(tangon)(michal);
                report = oscard.withTiming;
                zuuluu = _closure2_slot14;
                michal = zuuluu.get;
                zuuluu = michal.bind(zuuluu)();
                michal = 100;
                zuuluu = michal * zuuluu;
                michal = 18;
                michal = option[michal];
                michal = golfie.bind(tangon)(michal);
                tangon = michal.timingFast;
                michal = '%';
                zuuluu = zuuluu + michal;
                michal = 'animate-always';
                michal = report.bind(oscard)(zuuluu, tangon, michal);
                entity['width'] = michal;
                return entity;
            };
            sequen = {};
            record = 17;
            record = option[record];
            record = oscard.bind(report)(record);
            record = record.withTiming;
            sequen['withTiming'] = record;
            sequen['progress'] = variable48;
            record = 18;
            record = option[record];
            record = oscard.bind(report)(record);
            record = record.timingFast;
            sequen['timingFast'] = record;
            tangon['__closure'] = sequen;
            sequen = 13895400048400.0;
            tangon['__workletHash'] = sequen;
            sequen = _closure1_slot18;
            tangon['__initData'] = sequen;
            output = yankee.bind(output)(tangon);
            papara = _closure1_slot4;
            yankee = papara.useRef;
            tangon = -1;
            tangon = yankee.bind(papara)(tangon);
            _closure2_slot15 = tangon;
            sequen = papara.useCallback;
            yankee = new Array(1);
            yankee[0] = variable39;
            tangon = function(argFoo) {
                michal = argFoo;
                var _closure3_slot0 = michal;
                entity = function(argFoo) {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        yankee = 0;
                        tangon = copyRestArgs(yankee);
                        entity = global;
                        golfie = entity.clearTimeout;
                        zuuluu = _closure2_slot15;
                        oscard = zuuluu.current;
                        zuuluu = undefined;
                        oscard = golfie.bind(zuuluu)(oscard);
                        option = _closure2_slot13;
                        golfie = option.set;
                        oscard = true;
                        oscard = golfie.bind(option)(oscard);
                        michal = _closure2_slot15;
                        golfie = entity.setTimeout;
                        oscard = function() {
                            zuuluu = _closure2_slot13;
                            michal = zuuluu.set;
                            entity = false;
                            entity = michal.bind(zuuluu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        entity = 2000;
                        entity = golfie.bind(zuuluu)(oscard, entity);
                        michal['current'] = entity;
                        oscard = _closure3_slot0;
                        michal = null;
                        if(!(michal == oscard)) { _fun00010_ip = 101; continue _fun00009 }
 99:
                        return zuuluu;
 101:
                        michal = _closure3_slot0;
                        entity = new Array(0);
                        yankee = entity;
                        offset = tangon;
                        verify = 0;
                        tangon = arraySpread(yankee, offset, verify);
                        yankee = michal;
                        offset = entity;
                        verify = undefined;
                        entity = apply(yankee, offset, verify);
                        return entity;
                    }
                };
                return entity;
            };
            cntext = sequen.bind(papara)(tangon, yankee);
            _closure2_slot16 = cntext;
            sierra = _closure1_slot1;
            tangon = 19;
            tangon = option[tangon];
            yankee = sierra.bind(report)(tangon);
            tangon = {};
            tangon['duration'] = target;
            tangon['isQuestCompleted'] = variable46;
            tangon['playerState'] = zuuluu;
            sequen = ctrled.id;
            tangon['questId'] = sequen;
            tangon['videoSessionId'] = foxtra;
            tangon['videoAssetId'] = romeon;
            record = yankee.bind(report)(tangon);
            variable41 = record.handleBufferAnalytics;
            tangon = record.handleEndAnalytics;
            _closure2_slot17 = tangon;
            sequen = record.handleErrorAnalytics;
            variable47 = record.handleLoadAnalytics;
            _closure2_slot18 = variable47;
            variable36 = record.handleLoadStartAnalytics;
            equals = record.handlePausePlaybackAnalytics;
            _closure2_slot19 = equals;
            yankee = record.handleProgressAnalytics;
            _closure2_slot20 = yankee;
            romeon = record.handleReadyForDisplayAnalytics;
            foxtra = record.handleResumePlaybackAnalytics;
            _closure2_slot21 = foxtra;
            record = record.handleSeekAnalytics;
            _closure2_slot22 = record;
            variable40 = papara.useCallback;
            limora = new Array(4);
            limora[0] = variable46;
            variable49 = echoed.timestampSec;
            limora[1] = variable49;
            limora[2] = variable47;
            limora[3] = config;
            config = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = argFoo;
                    golfie = zuuluu.duration;
                    tangon = _closure2_slot6;
                    entity = undefined;
                    tangon = tangon.bind(entity)(golfie);
                    report = _closure2_slot11;
                    tangon = true;
                    tangon = report.bind(entity)(tangon);
                    tangon = _closure2_slot18;
                    tangon = tangon.bind(entity)();
                    tangon = _closure2_slot1;
                    tangon = tangon.current;
                    report = null;
                    if(!(report != tangon)) { _fun00012_ip = 156; continue _fun00011 }
 56:
                    tangon = _closure2_slot8;
                    option = tangon.timestampSec;
                    oscard = _closure2_slot4;
                    tangon = !oscard;
                    if(oscard) { _fun00012_ip = 87; continue _fun00011 }
 76:
                    oscard = 3;
                    oscard = golfie - oscard;
                    tangon = option < oscard;
 87:
                    if(!tangon) { _fun00012_ip = 117; continue _fun00011 }
 90:
                    tangon = _closure2_slot1;
                    golfie = tangon.current;
                    oscard = golfie.seek;
                    tangon = 1;
                    tangon = option - tangon;
                    tangon = oscard.bind(golfie)(tangon);
 117:
                    oscard = _closure2_slot10;
                    tangon = _closure1_slot16;
                    tangon = tangon.PLAYING;
                    tangon = oscard.bind(entity)(tangon);
                    tangon = _closure2_slot0;
                    if(!(report != tangon)) { _fun00012_ip = 156; continue _fun00011 }
 147:
                    michal = _closure2_slot0;
                    michal = michal.bind(entity)(zuuluu);
 156:
                    return entity;
                }
            };
            variable40 = variable40.bind(papara)(config, limora);
            limora = papara.useCallback;
            config = new Array(4);
            config[0] = zuuluu;
            config[1] = equals;
            config[2] = foxtra;
            config[3] = whisks;
            foxtra = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    michal = arguments[0];
                    entity = undefined;
                    if(!(michal === entity)) { _fun00014_ip = 11; continue _fun00013 }
 9:
                    michal = {};
 11:
                    zuuluu = michal.shouldRestartVideo;
                    if(!(zuuluu === entity)) { _fun00014_ip = 23; continue _fun00013 }
 21:
                    zuuluu = true;
 23:
                    tangon = _closure2_slot12;
                    if(!tangon) { _fun00014_ip = 36; continue _fun00013 }
 33:
                    if(zuuluu) { _fun00014_ip = 133; continue _fun00013 }
 36:
                    report = _closure2_slot9;
                    tangon = _closure1_slot16;
                    tangon = tangon.PAUSED;
                    if(!(report !== tangon)) { _fun00014_ip = 104; continue _fun00013 }
 57:
                    report = _closure2_slot9;
                    tangon = _closure1_slot16;
                    tangon = tangon.PLAYING;
                    if(!(report === tangon)) { _fun00014_ip = 191; continue _fun00013 }
 75:
                    report = _closure2_slot10;
                    tangon = _closure1_slot16;
                    tangon = tangon.PAUSED;
                    tangon = report.bind(entity)(tangon);
                    tangon = _closure2_slot19;
                    tangon = tangon.bind(entity)();
                    _fun00014_ip = 191; continue _fun00013;
 104:
                    tangon = _closure2_slot10;
                    zuuluu = _closure1_slot16;
                    zuuluu = zuuluu.PLAYING;
                    zuuluu = tangon.bind(entity)(zuuluu);
                    zuuluu = _closure2_slot21;
                    zuuluu = zuuluu.bind(entity)();
                    _fun00014_ip = 191; continue _fun00013;
 133:
                    zuuluu = _closure2_slot1;
                    report = zuuluu.current;
                    zuuluu = null;
                    if(!(zuuluu != report)) { _fun00014_ip = 161; continue _fun00013 }
 148:
                    tangon = report.seek;
                    zuuluu = 0;
                    zuuluu = tangon.bind(report)(zuuluu);
 161:
                    tangon = _closure2_slot10;
                    zuuluu = _closure1_slot16;
                    zuuluu = zuuluu.PLAYING;
                    zuuluu = tangon.bind(entity)(zuuluu);
                    michal = _closure2_slot21;
                    michal = michal.bind(entity)();
 191:
                    return entity;
                }
            };
            limora = limora.bind(papara)(foxtra, config);
            _closure2_slot23 = limora;
            equals = papara.useCallback;
            config = new Array(2);
            config[0] = cntext;
            config[1] = limora;
            foxtra = function() {
                zuuluu = _closure2_slot16;
                entity = _closure2_slot23;
                michal = undefined;
                entity = zuuluu.bind(michal)(entity);
                entity = entity.bind(michal)();
                return entity;
            };
            equals = equals.bind(papara)(foxtra, config);
            variable47 = papara.useCallback;
            config = function() {
                entity = undefined;
                return entity;
            };
            foxtra = new Array(0);
            config = variable47.bind(papara)(config, foxtra);
            foxtra = papara.useContext;
            verify = option[verify];
            verify = sierra.bind(report)(verify);
            verify = foxtra.bind(papara)(verify);
            verify = verify.isModalPanGestureActive;
            _closure2_slot24 = verify;
            sierra = papara.useCallback;
            foxtra = new Array(3);
            foxtra[0] = variable39;
            foxtra[1] = limora;
            foxtra[2] = verify;
            verify = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    michal = _closure2_slot24;
                    michal = michal.current;
                    if(michal) { _fun00016_ip = 67; continue _fun00015 }
 15:
                    zuuluu = _closure2_slot13;
                    michal = zuuluu.get;
                    michal = michal.bind(zuuluu)();
                    if(!michal) { _fun00016_ip = 47; continue _fun00015 }
 31:
                    tangon = _closure2_slot13;
                    zuuluu = tangon.set;
                    michal = false;
                    michal = zuuluu.bind(tangon)(michal);
 47:
                    zuuluu = _closure2_slot23;
                    michal = {};
                    entity = false;
                    michal['shouldRestartVideo'] = entity;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
 67:
                    entity = undefined;
                    return entity;
                }
            };
            verify = sierra.bind(papara)(verify, foxtra);
            variable39 = _closure1_slot14;
            variable53 = echoed.timestampSec;
            variable52 = echoed.maxTimestampSec;
            variable51 = echoed.duration;
            variable54 = undefined;
            variable50 = variable46;
            foxtra = variable54[variable39](variable53, variable52, variable51, variable50, variable49);
            limora = !foxtra;
            _closure2_slot25 = limora;
            variable39 = papara.useCallback;
            sierra = new Array(5);
            sierra[0] = target;
            sierra[1] = variable48;
            foxtra = echoed.maxTimestampSec;
            sierra[2] = foxtra;
            sierra[3] = record;
            sierra[4] = limora;
            foxtra = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    michal = _closure2_slot1;
                    zuuluu = michal.current;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00018_ip = 112; continue _fun00017 }
 18:
                    zuuluu = _closure2_slot14;
                    michal = zuuluu.get;
                    zuuluu = michal.bind(zuuluu)();
                    michal = _closure2_slot5;
                    zuuluu = zuuluu * michal;
                    michal = _closure2_slot25;
                    if(michal) { _fun00018_ip = 112; continue _fun00017 }
 46:
                    michal = global;
                    report = michal.Math;
                    tangon = report.min;
                    michal = 10;
                    zuuluu = zuuluu + michal;
                    michal = _closure2_slot8;
                    michal = michal.maxTimestampSec;
                    tangon = tangon.bind(report)(zuuluu, michal);
                    michal = _closure2_slot1;
                    zuuluu = michal.current;
                    michal = zuuluu.seek;
                    michal = michal.bind(zuuluu)(tangon);
                    michal = _closure2_slot22;
                    entity = undefined;
                    entity = michal.bind(entity)();
 112:
                    entity = undefined;
                    return entity;
                }
            };
            foxtra = variable39.bind(papara)(foxtra, sierra);
            variable46 = papara.useCallback;
            variable39 = new Array(3);
            variable39[0] = target;
            variable39[1] = variable48;
            variable39[2] = record;
            sierra = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    michal = _closure2_slot1;
                    zuuluu = michal.current;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00020_ip = 69; continue _fun00019 }
 18:
                    zuuluu = _closure2_slot5;
                    michal = 0;
                    if(!(zuuluu > michal)) { _fun00020_ip = 59; continue _fun00019 }
 28:
                    tangon = _closure2_slot14;
                    zuuluu = tangon.set;
                    michal = argFoo;
                    report = michal.currentTime;
                    michal = _closure2_slot5;
                    michal = report / michal;
                    michal = zuuluu.bind(tangon)(michal);
 59:
                    michal = _closure2_slot22;
                    entity = undefined;
                    entity = michal.bind(entity)();
 69:
                    entity = undefined;
                    return entity;
                }
            };
            variable39 = variable46.bind(papara)(sierra, variable39);
            variable46 = papara.useCallback;
            sierra = new Array(3);
            sierra[0] = target;
            sierra[1] = variable48;
            sierra[2] = record;
            record = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    michal = _closure2_slot1;
                    zuuluu = michal.current;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00022_ip = 97; continue _fun00021 }
 18:
                    zuuluu = _closure2_slot14;
                    michal = zuuluu.get;
                    zuuluu = michal.bind(zuuluu)();
                    michal = _closure2_slot5;
                    report = zuuluu * michal;
                    michal = _closure2_slot1;
                    tangon = michal.current;
                    zuuluu = tangon.seek;
                    michal = global;
                    golfie = michal.Math;
                    oscard = golfie.max;
                    michal = 10;
                    report = report - michal;
                    michal = 0;
                    michal = oscard.bind(golfie)(michal, report);
                    michal = zuuluu.bind(tangon)(michal);
                    michal = _closure2_slot22;
                    entity = undefined;
                    entity = michal.bind(entity)();
 97:
                    entity = undefined;
                    return entity;
                }
            };
            record = variable46.bind(papara)(record, sierra);
            record = cntext.bind(report)(record);
            cntext = cntext.bind(report)(foxtra);
            foxtra = papara.useRef;
            variable47 = foxtra.bind(papara)(source);
            _closure2_slot26 = variable47;
            foxtra = papara.useRef;
            variable46 = foxtra.bind(papara)(source);
            _closure2_slot27 = variable46;
            sierra = papara.useCallback;
            foxtra = new Array(7);
            foxtra[0] = variable48;
            foxtra[1] = ctrled;
            foxtra[2] = variable47;
            foxtra[3] = variable46;
            variable43 = variable43.taskType;
            foxtra[4] = variable43;
            foxtra[5] = variable37;
            foxtra[6] = yankee;
            yankee = function(argFoo) {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    entity = argFoo;
                    michal = entity.seekableDuration;
                    tangon = 0;
                    if(!(tangon !== michal)) { _fun00024_ip = 31; continue _fun00023 }
 15:
                    zuuluu = entity.currentTime;
                    michal = entity.seekableDuration;
                    tangon = zuuluu / michal;
 31:
                    report = entity.currentTime;
                    zuuluu = _closure2_slot26;
                    zuuluu = zuuluu.current;
                    if(!(report >= zuuluu)) { _fun00024_ip = 178; continue _fun00023 }
 56:
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    zuuluu = 20;
                    zuuluu = oscard[zuuluu];
                    golfie = undefined;
                    option = report.bind(golfie)(zuuluu);
                    oscard = option.sendVideoProgress;
                    report = _closure2_slot2;
                    zuuluu = entity.currentTime;
                    zuuluu = oscard.bind(option)(report, zuuluu);
                    oscard = _closure2_slot20;
                    report = entity.seekableDuration;
                    zuuluu = entity.currentTime;
                    zuuluu = oscard.bind(golfie)(tangon, report, zuuluu);
                    report = _closure2_slot26;
                    oscard = entity.currentTime;
                    zuuluu = 6;
                    oscard = oscard + zuuluu;
                    zuuluu = global;
                    golfie = zuuluu.Math;
                    zuuluu = golfie.random;
                    golfie = zuuluu.bind(golfie)();
                    zuuluu = 2;
                    zuuluu = zuuluu * golfie;
                    zuuluu = oscard + zuuluu;
                    report['current'] = zuuluu;
 178:
                    report = entity.currentTime;
                    zuuluu = _closure2_slot27;
                    zuuluu = zuuluu.current;
                    if(!(report >= zuuluu)) { _fun00024_ip = 283; continue _fun00023 }
 197:
                    oscard = _closure1_slot0;
                    report = _closure1_slot2;
                    zuuluu = 21;
                    report = report[zuuluu];
                    zuuluu = undefined;
                    option = oscard.bind(zuuluu)(report);
                    golfie = option.updateOptimisticProgress;
                    zuuluu = _closure2_slot2;
                    oscard = zuuluu.id;
                    zuuluu = _closure2_slot3;
                    report = zuuluu.taskType;
                    zuuluu = entity.currentTime;
                    zuuluu = golfie.bind(option)(oscard, report, zuuluu);
                    report = _closure2_slot27;
                    oscard = entity.currentTime;
                    zuuluu = 1;
                    zuuluu = oscard + zuuluu;
                    report['current'] = zuuluu;
 283:
                    golfie = _closure2_slot7;
                    zuuluu = _closure2_slot2;
                    oscard = zuuluu.id;
                    report = entity.currentTime;
                    zuuluu = entity.seekableDuration;
                    entity = undefined;
                    zuuluu = golfie.bind(entity)(oscard, report, zuuluu);
                    zuuluu = _closure2_slot14;
                    michal = zuuluu.set;
                    michal = michal.bind(zuuluu)(tangon);
                    return entity;
                }
            };
            variable37 = sierra.bind(papara)(yankee, foxtra);
            foxtra = papara.useCallback;
            yankee = new Array(3);
            yankee[0] = target;
            yankee[1] = ctrled;
            yankee[2] = tangon;
            tangon = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 20;
                michal = michal[entity];
                entity = undefined;
                oscard = zuuluu.bind(entity)(michal);
                report = oscard.sendVideoProgress;
                tangon = _closure2_slot2;
                zuuluu = _closure2_slot5;
                zuuluu = report.bind(oscard)(tangon, zuuluu);
                michal = _closure2_slot17;
                michal = michal.bind(entity)();
                return entity;
            };
            target = foxtra.bind(papara)(tangon, yankee);
            foxtra = papara.useMemo;
            yankee = new Array(1);
            yankee[0] = ctrled;
            tangon = function() {
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 12;
                zuuluu = oscard[entity];
                michal = undefined;
                tangon = report.bind(michal)(zuuluu);
                zuuluu = tangon.resolveVideoQuestAsset;
                entity = oscard[entity];
                entity = report.bind(michal)(entity);
                entity = entity.VideoQuestAssetId;
                michal = entity.VIDEO_PLAYER_THUMBNAIL;
                entity = _closure2_slot2;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            foxtra = foxtra.bind(papara)(tangon, yankee);
            tangon = 22;
            tangon = option[tangon];
            option = oscard.bind(report)(tangon);
            oscard = option.useStateFromStores;
            yankee = _closure1_slot7;
            tangon = new Array(1);
            tangon[0] = yankee;
            michal = function() {
                michal = _closure1_slot7;
                entity = michal.getState;
                entity = entity.bind(michal)();
                return entity;
            };
            tangon = oscard.bind(option)(tangon, michal);
            michal = _closure1_slot9;
            michal = michal.ACTIVE;
            michal = tangon === michal;
            if(!(entity != variable44)) { _fun00004_ip = 3494; continue _fun00003 }
 1754:
            sierra = !michal;
            if(!michal) { _fun00004_ip = 1774; continue _fun00003 }
 1760:
            michal = _closure1_slot16;
            michal = michal.PAUSED;
            sierra = zuuluu === michal;
 1774:
            tangon = _closure1_slot10;
            zuuluu = _closure1_slot5;
            michal = {};
            option = sizing.container;
            oscard = new Array(2);
            oscard[0] = option;
            oscard[1] = golfie;
            michal['style'] = oscard;
            michal['accessible'] = offset;
            option = _closure1_slot11;
            golfie = _closure1_slot6;
            oscard = {};
            yankee = sizing.videoContainer;
            oscard['style'] = yankee;
            oscard['onPress'] = verify;
            variable47 = _closure1_slot0;
            variable43 = _closure1_slot2;
            papara = 23;
            verify = variable43[papara];
            verify = variable47.bind(report)(verify);
            variable46 = verify.intl;
            yankee = variable46.string;
            verify = variable43[papara];
            verify = variable47.bind(report)(verify);
            verify = verify.t;
            verify = verify.FlNoSU;
            verify = yankee.bind(variable46)(verify);
            oscard['accessibilityLabel'] = verify;
            yankee = _closure1_slot1;
            verify = 24;
            verify = variable43[verify];
            yankee = yankee.bind(report)(verify);
            verify = {'mixWithOthers': 'mix', 'ref': null, 'accessible': false, 'importantForAccessibility': 'no-hide-descendants', 'accessibilityRole': 'none'};
            verify['ref'] = variable42;
            variable42 = sizing.video;
            verify['style'] = variable42;
            verify['paused'] = sierra;
            variable42 = {};
            variable46 = entity == variable45;
            variable43 = undefined;
            if(variable46) { _fun00004_ip = 1960; continue _fun00003 }
 1955:
            variable43 = variable45.url;
 1960:
            if(!(entity == variable43)) { _fun00004_ip = 1969; continue _fun00003 }
 1964:
            variable43 = variable44.url;
 1969:
            variable42['uri'] = variable43;
            verify['source'] = variable42;
            verify['onBuffer'] = variable41;
            verify['onLoad'] = variable40;
            verify['onSeek'] = variable39;
            verify['onProgress'] = variable37;
            verify['onLoadStart'] = variable36;
            verify['onEnd'] = target;
            verify['onError'] = sequen;
            verify['onReadyForDisplay'] = romeon;
            sequen = entity == foxtra;
            romeon = undefined;
            if(sequen) { _fun00004_ip = 2032; continue _fun00003 }
 2027:
            romeon = foxtra.url;
 2032:
            verify['poster'] = romeon;
            romeon = 'contain';
            verify['posterResizeMode'] = romeon;
            verify['resizeMode'] = romeon;
            yankee = tangon.bind(report)(yankee, verify);
            verify = new Array(4);
            verify[0] = yankee;
            foxtra = _closure1_slot10;
            romeon = _closure1_slot0;
            sequen = _closure1_slot2;
            yankee = 25;
            yankee = sequen[yankee];
            yankee = romeon.bind(report)(yankee);
            romeon = yankee.VideoQuestCaptions;
            yankee = {};
            yankee['quest'] = ctrled;
            echoed = echoed.timestampSec;
            yankee['currentTime'] = echoed;
            yankee['visible'] = variable38;
            echoed = {};
            ctrled = entity == vacuum;
            sequen = undefined;
            if(ctrled) { _fun00004_ip = 2134; continue _fun00003 }
 2129:
            sequen = vacuum.top;
 2134:
            target = entity != sequen;
            ctrled = 0;
            if(!target) { _fun00004_ip = 2146; continue _fun00003 }
 2143:
            ctrled = sequen;
 2146:
            echoed['top'] = ctrled;
            ctrled = entity == vacuum;
            sequen = undefined;
            if(ctrled) { _fun00004_ip = 2164; continue _fun00003 }
 2159:
            sequen = vacuum.bottom;
 2164:
            target = entity != sequen;
            ctrled = 0;
            if(!target) { _fun00004_ip = 2176; continue _fun00003 }
 2173:
            ctrled = sequen;
 2176:
            echoed['bottom'] = ctrled;
            ctrled = entity == vacuum;
            sequen = undefined;
            if(ctrled) { _fun00004_ip = 2194; continue _fun00003 }
 2189:
            sequen = vacuum.left;
 2194:
            target = entity != sequen;
            ctrled = 0;
            if(!target) { _fun00004_ip = 2206; continue _fun00003 }
 2203:
            ctrled = sequen;
 2206:
            echoed['left'] = ctrled;
            sequen = entity == vacuum;
            ctrled = undefined;
            if(sequen) { _fun00004_ip = 2224; continue _fun00003 }
 2219:
            ctrled = vacuum.right;
 2224:
            vacuum = entity != ctrled;
            source = 0;
            if(!vacuum) { _fun00004_ip = 2236; continue _fun00003 }
 2233:
            source = ctrled;
 2236:
            echoed['right'] = source;
            yankee['style'] = echoed;
            yankee = foxtra.bind(report)(romeon, yankee);
            verify[1] = yankee;
            foxtra = _closure1_slot11;
            romeon = _closure1_slot1;
            yankee = _closure1_slot2;
            yankee = yankee[result];
            yankee = romeon.bind(report)(yankee);
            romeon = yankee.View;
            yankee = {};
            source = sizing.controls;
            echoed = new Array(2);
            echoed[0] = source;
            echoed[1] = update;
            yankee['style'] = echoed;
            yankee['accessible'] = offset;
            offset = 'landscape';
            offset = offset === kiloes;
            echoed = offset;
            if(!offset) { _fun00004_ip = 2662; continue _fun00003 }
 2326:
            source = _closure1_slot11;
            update = _closure1_slot5;
            kiloes = {};
            ctrled = sizing.controlsTopBottom;
            kiloes['style'] = ctrled;
            target = _closure1_slot10;
            variable36 = _closure1_slot0;
            variable39 = _closure1_slot2;
            vacuum = 26;
            ctrled = variable39[vacuum];
            ctrled = variable36.bind(report)(ctrled);
            sequen = ctrled.PressableOpacity;
            ctrled = {};
            variable37 = 'button';
            ctrled['accessibilityRole'] = variable37;
            variable40 = variable39[papara];
            variable40 = variable36.bind(report)(variable40);
            variable42 = variable40.intl;
            variable41 = variable42.string;
            variable40 = variable39[papara];
            variable40 = variable36.bind(report)(variable40);
            variable40 = variable40.t;
            variable40 = variable40.bDSZOz;
            variable40 = variable41.bind(variable42)(variable40);
            ctrled['accessibilityLabel'] = variable40;
            ctrled['onPress'] = quebec;
            quebec = 27;
            quebec = variable39[quebec];
            quebec = variable36.bind(report)(quebec);
            variable36 = quebec.ClosedCaptionsOutlineIcon;
            quebec = {};
            if(variable38) { _fun00004_ip = 2474; continue _fun00003 }
 2461:
            variable38 = sizing.iconDisabled;
            variable38 = variable38.color;
            _fun00004_ip = 2484; continue _fun00003;
 2474:
            variable39 = sizing.icon;
            variable38 = variable39.color;
 2484:
            quebec['color'] = variable38;
            quebec = target.bind(report)(variable36, quebec);
            ctrled['children'] = quebec;
            sequen = target.bind(report)(sequen, ctrled);
            ctrled = new Array(2);
            ctrled[0] = sequen;
            target = _closure1_slot10;
            quebec = _closure1_slot0;
            variable36 = _closure1_slot2;
            vacuum = variable36[vacuum];
            vacuum = quebec.bind(report)(vacuum);
            sequen = vacuum.PressableOpacity;
            vacuum = {};
            vacuum['accessibilityRole'] = variable37;
            variable37 = variable36[papara];
            variable37 = quebec.bind(report)(variable37);
            variable39 = variable37.intl;
            variable38 = variable39.string;
            variable37 = variable36[papara];
            variable37 = quebec.bind(report)(variable37);
            variable37 = variable37.t;
            variable37 = variable37.KCzjTk;
            variable37 = variable38.bind(variable39)(variable37);
            vacuum['accessibilityLabel'] = variable37;
            vacuum['onPress'] = status;
            status = 28;
            status = variable36[status];
            status = quebec.bind(report)(status);
            quebec = status.TranscriptOutlineIcon;
            status = {};
            variable36 = sizing.iconDisabled;
            variable36 = variable36.color;
            status['color'] = variable36;
            status = target.bind(report)(quebec, status);
            vacuum['children'] = status;
            vacuum = target.bind(report)(sequen, vacuum);
            ctrled[1] = vacuum;
            kiloes['children'] = ctrled;
            echoed = source.bind(report)(update, kiloes);
 2662:
            kiloes = new Array(3);
            kiloes[0] = echoed;
            source = _closure1_slot11;
            update = _closure1_slot5;
            echoed = {};
            ctrled = sizing.controlsMiddle;
            echoed['style'] = ctrled;
            status = _closure1_slot10;
            variable38 = _closure1_slot0;
            quebec = _closure1_slot2;
            vacuum = 29;
            ctrled = quebec[vacuum];
            ctrled = variable38.bind(report)(ctrled);
            sequen = ctrled.VideoQuestPlayerControlButton;
            ctrled = {};
            target = 'button';
            ctrled['accessibilityRole'] = target;
            variable36 = quebec[papara];
            variable36 = variable38.bind(report)(variable36);
            variable39 = variable36.intl;
            variable37 = variable39.string;
            variable36 = quebec[papara];
            variable36 = variable38.bind(report)(variable36);
            variable36 = variable36.t;
            variable36 = variable36.r9s3Ul;
            variable36 = variable37.bind(variable39)(variable36);
            ctrled['accessibilityLabel'] = variable36;
            ctrled['onPress'] = record;
            record = 30;
            record = quebec[record];
            record = variable38.bind(report)(record);
            variable36 = record.SkipBackwardIcon;
            record = {'color': null, 'width': 16, 'height': 16};
            variable37 = sizing.icon;
            variable37 = variable37.color;
            record['color'] = variable37;
            record = status.bind(report)(variable36, record);
            ctrled['children'] = record;
            sequen = status.bind(report)(sequen, ctrled);
            ctrled = new Array(3);
            ctrled[0] = sequen;
            sequen = quebec[vacuum];
            sequen = variable38.bind(report)(sequen);
            record = sequen.VideoQuestPlayerControlButton;
            sequen = {};
            sequen['accessibilityRole'] = target;
            variable36 = quebec[papara];
            variable36 = variable38.bind(report)(variable36);
            variable37 = variable36.intl;
            variable36 = variable37.string;
            quebec = quebec[papara];
            quebec = variable38.bind(report)(quebec);
            quebec = quebec.t;
            quebec = quebec.RscU7O;
            quebec = variable36.bind(variable37)(quebec);
            sequen['accessibilityLabel'] = quebec;
            sequen['onPress'] = equals;
            equals = _closure1_slot0;
            quebec = _closure1_slot2;
            if(whisks) { _fun00004_ip = 2983; continue _fun00003 }
 2940:
            if(sierra) { _fun00004_ip = 2963; continue _fun00003 }
 2943:
            sierra = 33;
            sierra = quebec[sierra];
            sierra = equals.bind(report)(sierra);
            whisks = sierra.PauseIcon;
            _fun00004_ip = 2981; continue _fun00003;
 2963:
            sierra = 32;
            sierra = quebec[sierra];
            sierra = equals.bind(report)(sierra);
            whisks = sierra.PlayIcon;
 2981:
            _fun00004_ip = 3001; continue _fun00003;
 2983:
            sierra = 31;
            sierra = quebec[sierra];
            sierra = equals.bind(report)(sierra);
            whisks = sierra.RetryIcon;
 3001:
            sierra = {};
            equals = 'lg';
            sierra['size'] = equals;
            sierra = status.bind(report)(whisks, sierra);
            sequen['children'] = sierra;
            sequen = status.bind(report)(record, sequen);
            ctrled[1] = sequen;
            record = _closure1_slot10;
            status = _closure1_slot0;
            sierra = _closure1_slot2;
            vacuum = sierra[vacuum];
            vacuum = status.bind(report)(vacuum);
            sequen = vacuum.VideoQuestPlayerControlButton;
            vacuum = {};
            vacuum['disabled'] = limora;
            vacuum['accessibilityRole'] = target;
            limora = sierra[papara];
            limora = status.bind(report)(limora);
            equals = limora.intl;
            whisks = equals.string;
            limora = sierra[papara];
            limora = status.bind(report)(limora);
            limora = limora.t;
            limora = limora.zWDcND;
            limora = whisks.bind(equals)(limora);
            vacuum['accessibilityLabel'] = limora;
            vacuum['onPress'] = cntext;
            cntext = 34;
            cntext = sierra[cntext];
            cntext = status.bind(report)(cntext);
            status = cntext.SkipForwardIcon;
            cntext = {'color': null, 'width': 16, 'height': 16};
            sierra = sizing.icon;
            sierra = sierra.color;
            cntext['color'] = sierra;
            cntext = record.bind(report)(status, cntext);
            vacuum['children'] = cntext;
            vacuum = record.bind(report)(sequen, vacuum);
            ctrled[2] = vacuum;
            echoed['children'] = ctrled;
            echoed = source.bind(report)(update, echoed);
            kiloes[1] = echoed;
            echoed = offset;
            if(!offset) { _fun00004_ip = 3365; continue _fun00003 }
 3213:
            ctrled = _closure1_slot10;
            source = _closure1_slot5;
            update = {};
            vacuum = sizing.controlsTopBottom;
            update['style'] = vacuum;
            record = _closure1_slot0;
            cntext = _closure1_slot2;
            vacuum = 26;
            vacuum = cntext[vacuum];
            vacuum = record.bind(report)(vacuum);
            sequen = vacuum.PressableOpacity;
            vacuum = {};
            vacuum['accessibilityRole'] = target;
            target = cntext[papara];
            target = record.bind(report)(target);
            status = target.intl;
            target = status.string;
            papara = cntext[papara];
            papara = record.bind(report)(papara);
            papara = papara.t;
            papara = papara.vKZT5u;
            papara = target.bind(status)(papara);
            vacuum['accessibilityLabel'] = papara;
            vacuum['onPress'] = config;
            config = 35;
            config = cntext[config];
            config = record.bind(report)(config);
            record = config.FullscreenEnterIcon;
            config = {};
            config = ctrled.bind(report)(record, config);
            vacuum['children'] = config;
            vacuum = ctrled.bind(report)(sequen, vacuum);
            update['children'] = vacuum;
            echoed = ctrled.bind(report)(source, update);
 3365:
            kiloes[2] = echoed;
            yankee['children'] = kiloes;
            yankee = foxtra.bind(report)(romeon, yankee);
            verify[2] = yankee;
            if(!offset) { _fun00004_ip = 3468; continue _fun00003 }
 3386:
            foxtra = _closure1_slot10;
            romeon = _closure1_slot5;
            yankee = {};
            kiloes = sizing.progressContainer;
            yankee['style'] = kiloes;
            kiloes = _closure1_slot1;
            backup = _closure1_slot2;
            backup = backup[result];
            backup = kiloes.bind(report)(backup);
            kiloes = backup.View;
            backup = {};
            result = sizing.progress;
            sizing = new Array(2);
            sizing[0] = result;
            sizing[1] = output;
            backup['style'] = sizing;
            backup = foxtra.bind(report)(kiloes, backup);
            yankee['children'] = backup;
            offset = foxtra.bind(report)(romeon, yankee);
 3468:
            verify[3] = offset;
            oscard['children'] = verify;
            oscard = option.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 3494:
            return entity;
        }
    };
    zuuluu['VideoQuestPlayer'] = michal;
    return entity;
})();