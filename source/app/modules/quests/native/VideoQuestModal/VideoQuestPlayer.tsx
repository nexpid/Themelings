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
    foxtra = 'row';
    romeon = 'flexDirection';
    verify[romeon] = foxtra;
    romeon = golfie[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.spacing;
    foxtra = romeon.PX_24;
    romeon = 'gap';
    verify[romeon] = foxtra;
    tangon['controls'] = verify;
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
    report = 32;
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
            target = entity.onLoad;
            var _closure2_slot0 = target;
            yankee = entity.orientation;
            status = entity.safeAreaInsets;
            echoed = entity.captionsEnabled;
            report = undefined;
            if(!(echoed === report)) { _fun00004_ip = 46; continue _fun00003 }
 44:
            echoed = false;
 46:
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
            variable39 = zuuluu.bind(tangon)(entity);
            _closure2_slot1 = variable39;
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            verify = 10;
            zuuluu = oscard[verify];
            option = tangon.bind(report)(zuuluu);
            zuuluu = option.useVideoQuestModalContext;
            zuuluu = zuuluu.bind(option)();
            sierra = zuuluu.quest;
            _closure2_slot2 = sierra;
            foxtra = zuuluu.videoSessionId;
            zuuluu = 11;
            zuuluu = oscard[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.useQuestTaskDetails;
            variable40 = zuuluu.bind(tangon)(sierra);
            _closure2_slot3 = variable40;
            tangon = sierra.userStatus;
            oscard = entity == tangon;
            zuuluu = undefined;
            if(oscard) { _fun00004_ip = 279; continue _fun00003 }
 273:
            zuuluu = tangon.completedAt;
 279:
            variable43 = entity != zuuluu;
            _closure2_slot4 = variable43;
            offset = _closure1_slot0;
            zuuluu = _closure1_slot2;
            oscard = 12;
            tangon = zuuluu[oscard];
            romeon = offset.bind(report)(tangon);
            option = romeon.resolveVideoQuestAsset;
            tangon = zuuluu[oscard];
            tangon = offset.bind(report)(tangon);
            tangon = tangon.VideoQuestAssetId;
            tangon = tangon.VIDEO_PLAYER_VIDEO;
            variable41 = option.bind(romeon)(tangon, sierra);
            tangon = zuuluu[oscard];
            option = offset.bind(report)(tangon);
            tangon = option.resolveVideoQuestAsset;
            zuuluu = zuuluu[oscard];
            zuuluu = offset.bind(report)(zuuluu);
            zuuluu = zuuluu.VideoQuestAssetId;
            zuuluu = zuuluu.VIDEO_PLAYER_VIDEO_HLS;
            variable42 = tangon.bind(option)(zuuluu, sierra);
            tangon = entity == variable42;
            zuuluu = undefined;
            if(tangon) { _fun00004_ip = 396; continue _fun00003 }
 391:
            zuuluu = variable42.url;
 396:
            if(!(entity == zuuluu)) { _fun00004_ip = 431; continue _fun00003 }
 400:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[oscard];
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.VideoQuestAssetId;
            romeon = zuuluu.VIDEO_PLAYER_VIDEO;
            _fun00004_ip = 460; continue _fun00003;
 431:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[oscard];
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.VideoQuestAssetId;
            romeon = zuuluu.VIDEO_PLAYER_VIDEO_HLS;
 460:
            output = _closure1_slot4;
            tangon = output.useState;
            zuuluu = variable40.targetSeconds;
            zuuluu = tangon.bind(output)(zuuluu);
            offset = _closure1_slot3;
            option = 2;
            zuuluu = offset.bind(report)(zuuluu, option);
            vacuum = 0;
            config = zuuluu[vacuum];
            _closure2_slot5 = config;
            oscard = 1;
            zuuluu = zuuluu[oscard];
            _closure2_slot6 = zuuluu;
            kiloes = _closure1_slot8;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.setVideoProgress;
                return entity;
            };
            quebec = kiloes.bind(report)(zuuluu);
            _closure2_slot7 = quebec;
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
            record = kiloes.bind(report)(zuuluu, tangon);
            _closure2_slot8 = record;
            tangon = output.useState;
            zuuluu = _closure1_slot16;
            zuuluu = zuuluu.PAUSED;
            zuuluu = tangon.bind(output)(zuuluu);
            tangon = offset.bind(report)(zuuluu, option);
            zuuluu = tangon[vacuum];
            _closure2_slot9 = zuuluu;
            tangon = tangon[oscard];
            _closure2_slot10 = tangon;
            tangon = output.useState;
            kiloes = false;
            tangon = tangon.bind(output)(kiloes);
            tangon = offset.bind(report)(tangon, option);
            papara = tangon[vacuum];
            tangon = tangon[oscard];
            _closure2_slot11 = tangon;
            if(!papara) { _fun00004_ip = 673; continue _fun00003 }
 652:
            option = _closure1_slot13;
            oscard = record.timestampSec;
            tangon = record.duration;
            papara = option.bind(report)(oscard, tangon);
 673:
            _closure2_slot12 = papara;
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            result = 14;
            tangon = option[result];
            offset = oscard.bind(report)(tangon);
            tangon = offset.useSharedValue;
            variable36 = tangon.bind(offset)(kiloes);
            _closure2_slot13 = variable36;
            tangon = option[result];
            output = oscard.bind(report)(tangon);
            offset = output.useAnimatedStyle;
            tangon = function() { // Original name: R
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
            update['showControls'] = variable36;
            update['playerState'] = zuuluu;
            source = _closure1_slot16;
            update['PlayerState'] = source;
            update['isVideoEnded'] = papara;
            source = 15;
            source = option[source];
            source = oscard.bind(report)(source);
            source = source.withSpring;
            update['withSpring'] = source;
            source = 16;
            source = option[source];
            source = oscard.bind(report)(source);
            source = source.SUBTLE_SPRING;
            update['SUBTLE_SPRING'] = source;
            tangon['__closure'] = update;
            update = 5034187678759.0;
            tangon['__workletHash'] = update;
            update = _closure1_slot17;
            tangon['__initData'] = update;
            update = offset.bind(output)(tangon);
            tangon = option[result];
            offset = oscard.bind(report)(tangon);
            tangon = offset.useSharedValue;
            variable45 = tangon.bind(offset)(vacuum);
            _closure2_slot14 = variable45;
            tangon = option[result];
            output = oscard.bind(report)(tangon);
            offset = output.useAnimatedStyle;
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
            source = {};
            ctrled = 17;
            ctrled = option[ctrled];
            ctrled = oscard.bind(report)(ctrled);
            ctrled = ctrled.withTiming;
            source['withTiming'] = ctrled;
            source['progress'] = variable45;
            ctrled = 18;
            ctrled = option[ctrled];
            ctrled = oscard.bind(report)(ctrled);
            ctrled = ctrled.timingFast;
            source['timingFast'] = ctrled;
            tangon['__closure'] = source;
            source = 13895400048400.0;
            tangon['__workletHash'] = source;
            source = _closure1_slot18;
            tangon['__initData'] = source;
            output = offset.bind(output)(tangon);
            sequen = _closure1_slot4;
            offset = sequen.useRef;
            tangon = -1;
            tangon = offset.bind(sequen)(tangon);
            _closure2_slot15 = tangon;
            source = sequen.useCallback;
            offset = new Array(1);
            offset[0] = variable36;
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
            ctrled = source.bind(sequen)(tangon, offset);
            _closure2_slot16 = ctrled;
            cntext = _closure1_slot1;
            tangon = 19;
            tangon = option[tangon];
            offset = cntext.bind(report)(tangon);
            tangon = {};
            tangon['duration'] = config;
            tangon['isQuestCompleted'] = variable43;
            tangon['playerState'] = zuuluu;
            source = sierra.id;
            tangon['questId'] = source;
            tangon['videoSessionId'] = foxtra;
            tangon['videoAssetId'] = romeon;
            source = offset.bind(report)(tangon);
            variable38 = source.handleBufferAnalytics;
            tangon = source.handleEndAnalytics;
            _closure2_slot17 = tangon;
            limora = source.handleErrorAnalytics;
            variable46 = source.handleLoadAnalytics;
            _closure2_slot18 = variable46;
            equals = source.handleLoadStartAnalytics;
            variable44 = source.handlePausePlaybackAnalytics;
            _closure2_slot19 = variable44;
            offset = source.handleProgressAnalytics;
            _closure2_slot20 = offset;
            romeon = source.handleReadyForDisplayAnalytics;
            foxtra = source.handleResumePlaybackAnalytics;
            _closure2_slot21 = foxtra;
            source = source.handleSeekAnalytics;
            _closure2_slot22 = source;
            variable37 = sequen.useCallback;
            whisks = new Array(4);
            whisks[0] = variable43;
            variable47 = record.timestampSec;
            whisks[1] = variable47;
            whisks[2] = variable46;
            whisks[3] = target;
            target = function(argFoo) {
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
            variable37 = variable37.bind(sequen)(target, whisks);
            whisks = sequen.useCallback;
            target = new Array(4);
            target[0] = zuuluu;
            target[1] = variable44;
            target[2] = foxtra;
            target[3] = papara;
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
            whisks = whisks.bind(sequen)(foxtra, target);
            _closure2_slot23 = whisks;
            variable44 = sequen.useCallback;
            target = new Array(2);
            target[0] = ctrled;
            target[1] = whisks;
            foxtra = function() {
                zuuluu = _closure2_slot16;
                entity = _closure2_slot23;
                michal = undefined;
                entity = zuuluu.bind(michal)(entity);
                entity = entity.bind(michal)();
                return entity;
            };
            target = variable44.bind(sequen)(foxtra, target);
            foxtra = sequen.useContext;
            verify = option[verify];
            verify = cntext.bind(report)(verify);
            verify = foxtra.bind(sequen)(verify);
            verify = verify.isModalPanGestureActive;
            _closure2_slot24 = verify;
            cntext = sequen.useCallback;
            foxtra = new Array(3);
            foxtra[0] = variable36;
            foxtra[1] = whisks;
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
            verify = cntext.bind(sequen)(verify, foxtra);
            variable36 = _closure1_slot14;
            variable51 = record.timestampSec;
            variable50 = record.maxTimestampSec;
            variable49 = record.duration;
            variable52 = undefined;
            variable48 = variable43;
            foxtra = variable52[variable36](variable51, variable50, variable49, variable48, variable47);
            cntext = !foxtra;
            _closure2_slot25 = cntext;
            variable36 = sequen.useCallback;
            whisks = new Array(5);
            whisks[0] = config;
            whisks[1] = variable45;
            foxtra = record.maxTimestampSec;
            whisks[2] = foxtra;
            whisks[3] = source;
            whisks[4] = cntext;
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
            foxtra = variable36.bind(sequen)(foxtra, whisks);
            variable43 = sequen.useCallback;
            variable36 = new Array(3);
            variable36[0] = config;
            variable36[1] = variable45;
            variable36[2] = source;
            whisks = function(argFoo) {
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
            variable36 = variable43.bind(sequen)(whisks, variable36);
            variable43 = sequen.useCallback;
            whisks = new Array(3);
            whisks[0] = config;
            whisks[1] = variable45;
            whisks[2] = source;
            source = function() {
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
            source = variable43.bind(sequen)(source, whisks);
            source = ctrled.bind(report)(source);
            ctrled = ctrled.bind(report)(foxtra);
            foxtra = sequen.useRef;
            variable44 = foxtra.bind(sequen)(vacuum);
            _closure2_slot26 = variable44;
            foxtra = sequen.useRef;
            variable43 = foxtra.bind(sequen)(vacuum);
            _closure2_slot27 = variable43;
            whisks = sequen.useCallback;
            foxtra = new Array(7);
            foxtra[0] = variable45;
            foxtra[1] = sierra;
            foxtra[2] = variable44;
            foxtra[3] = variable43;
            variable40 = variable40.taskType;
            foxtra[4] = variable40;
            foxtra[5] = quebec;
            foxtra[6] = offset;
            offset = function(argFoo) {
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
            quebec = whisks.bind(sequen)(offset, foxtra);
            foxtra = sequen.useCallback;
            offset = new Array(3);
            offset[0] = config;
            offset[1] = sierra;
            offset[2] = tangon;
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
            whisks = foxtra.bind(sequen)(tangon, offset);
            foxtra = sequen.useMemo;
            offset = new Array(1);
            offset[0] = sierra;
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
            foxtra = foxtra.bind(sequen)(tangon, offset);
            tangon = 22;
            tangon = option[tangon];
            option = oscard.bind(report)(tangon);
            oscard = option.useStateFromStores;
            offset = _closure1_slot7;
            tangon = new Array(1);
            tangon[0] = offset;
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
            if(!(entity != variable41)) { _fun00004_ip = 2903; continue _fun00003 }
 1720:
            sequen = !michal;
            if(!michal) { _fun00004_ip = 1740; continue _fun00003 }
 1726:
            michal = _closure1_slot16;
            michal = michal.PAUSED;
            sequen = zuuluu === michal;
 1740:
            tangon = _closure1_slot10;
            zuuluu = _closure1_slot5;
            michal = {};
            option = sizing.container;
            oscard = new Array(2);
            oscard[0] = option;
            oscard[1] = golfie;
            michal['style'] = oscard;
            michal['accessible'] = kiloes;
            option = _closure1_slot11;
            golfie = _closure1_slot6;
            oscard = {};
            offset = sizing.videoContainer;
            oscard['style'] = offset;
            oscard['onPress'] = verify;
            variable44 = _closure1_slot0;
            variable40 = _closure1_slot2;
            config = 23;
            verify = variable40[config];
            verify = variable44.bind(report)(verify);
            variable43 = verify.intl;
            offset = variable43.string;
            verify = variable40[config];
            verify = variable44.bind(report)(verify);
            verify = verify.t;
            verify = verify.FlNoSU;
            verify = offset.bind(variable43)(verify);
            oscard['accessibilityLabel'] = verify;
            offset = _closure1_slot1;
            verify = 24;
            verify = variable40[verify];
            offset = offset.bind(report)(verify);
            verify = {'mixWithOthers': 'mix', 'ref': null, 'accessible': false, 'importantForAccessibility': 'no-hide-descendants', 'accessibilityRole': 'none'};
            verify['ref'] = variable39;
            variable39 = sizing.video;
            verify['style'] = variable39;
            verify['paused'] = sequen;
            variable39 = {};
            variable43 = entity == variable42;
            variable40 = undefined;
            if(variable43) { _fun00004_ip = 1926; continue _fun00003 }
 1921:
            variable40 = variable42.url;
 1926:
            if(!(entity == variable40)) { _fun00004_ip = 1935; continue _fun00003 }
 1930:
            variable40 = variable41.url;
 1935:
            variable39['uri'] = variable40;
            verify['source'] = variable39;
            verify['onBuffer'] = variable38;
            verify['onLoad'] = variable37;
            verify['onSeek'] = variable36;
            verify['onProgress'] = quebec;
            verify['onLoadStart'] = equals;
            verify['onEnd'] = whisks;
            verify['onError'] = limora;
            verify['onReadyForDisplay'] = romeon;
            limora = entity == foxtra;
            romeon = undefined;
            if(limora) { _fun00004_ip = 1997; continue _fun00003 }
 1992:
            romeon = foxtra.url;
 1997:
            verify['poster'] = romeon;
            romeon = 'contain';
            verify['posterResizeMode'] = romeon;
            verify['resizeMode'] = romeon;
            offset = tangon.bind(report)(offset, verify);
            verify = new Array(4);
            verify[0] = offset;
            foxtra = _closure1_slot10;
            romeon = _closure1_slot0;
            limora = _closure1_slot2;
            offset = 25;
            offset = limora[offset];
            offset = romeon.bind(report)(offset);
            romeon = offset.VideoQuestCaptions;
            offset = {};
            offset['quest'] = sierra;
            record = record.timestampSec;
            offset['currentTime'] = record;
            offset['visible'] = echoed;
            echoed = {};
            record = entity == status;
            sierra = undefined;
            if(record) { _fun00004_ip = 2099; continue _fun00003 }
 2094:
            sierra = status.top;
 2099:
            limora = entity != sierra;
            record = 0;
            if(!limora) { _fun00004_ip = 2111; continue _fun00003 }
 2108:
            record = sierra;
 2111:
            echoed['top'] = record;
            record = entity == status;
            sierra = undefined;
            if(record) { _fun00004_ip = 2129; continue _fun00003 }
 2124:
            sierra = status.bottom;
 2129:
            limora = entity != sierra;
            record = 0;
            if(!limora) { _fun00004_ip = 2141; continue _fun00003 }
 2138:
            record = sierra;
 2141:
            echoed['bottom'] = record;
            record = entity == status;
            sierra = undefined;
            if(record) { _fun00004_ip = 2159; continue _fun00003 }
 2154:
            sierra = status.left;
 2159:
            limora = entity != sierra;
            record = 0;
            if(!limora) { _fun00004_ip = 2171; continue _fun00003 }
 2168:
            record = sierra;
 2171:
            echoed['left'] = record;
            sierra = entity == status;
            record = undefined;
            if(sierra) { _fun00004_ip = 2189; continue _fun00003 }
 2184:
            record = status.right;
 2189:
            status = entity != record;
            vacuum = 0;
            if(!status) { _fun00004_ip = 2201; continue _fun00003 }
 2198:
            vacuum = record;
 2201:
            echoed['right'] = vacuum;
            offset['style'] = echoed;
            offset = foxtra.bind(report)(romeon, offset);
            verify[1] = offset;
            foxtra = _closure1_slot11;
            romeon = _closure1_slot1;
            status = _closure1_slot2;
            offset = status[result];
            offset = romeon.bind(report)(offset);
            romeon = offset.View;
            offset = {};
            vacuum = sizing.controls;
            echoed = new Array(2);
            echoed[0] = vacuum;
            echoed[1] = update;
            offset['style'] = echoed;
            offset['accessible'] = kiloes;
            vacuum = _closure1_slot10;
            whisks = _closure1_slot0;
            echoed = 26;
            kiloes = status[echoed];
            kiloes = whisks.bind(report)(kiloes);
            update = kiloes.VideoQuestPlayerControlButton;
            kiloes = {};
            record = 'button';
            kiloes['accessibilityRole'] = record;
            sierra = status[config];
            sierra = whisks.bind(report)(sierra);
            equals = sierra.intl;
            limora = equals.string;
            sierra = status[config];
            sierra = whisks.bind(report)(sierra);
            sierra = sierra.t;
            sierra = sierra.r9s3Ul;
            sierra = limora.bind(equals)(sierra);
            kiloes['accessibilityLabel'] = sierra;
            kiloes['onPress'] = source;
            source = 27;
            source = status[source];
            source = whisks.bind(report)(source);
            sierra = source.SkipBackwardIcon;
            source = {'color': null, 'width': 16, 'height': 16};
            limora = sizing.icon;
            limora = limora.color;
            source['color'] = limora;
            source = vacuum.bind(report)(sierra, source);
            kiloes['children'] = source;
            update = vacuum.bind(report)(update, kiloes);
            kiloes = new Array(3);
            kiloes[0] = update;
            update = status[echoed];
            update = whisks.bind(report)(update);
            source = update.VideoQuestPlayerControlButton;
            update = {};
            update['accessibilityRole'] = record;
            sierra = status[config];
            sierra = whisks.bind(report)(sierra);
            limora = sierra.intl;
            sierra = limora.string;
            status = status[config];
            status = whisks.bind(report)(status);
            status = status.t;
            status = status.RscU7O;
            status = sierra.bind(limora)(status);
            update['accessibilityLabel'] = status;
            update['onPress'] = target;
            target = _closure1_slot0;
            status = _closure1_slot2;
            if(papara) { _fun00004_ip = 2563; continue _fun00003 }
 2520:
            if(sequen) { _fun00004_ip = 2543; continue _fun00003 }
 2523:
            sequen = 30;
            sequen = status[sequen];
            sequen = target.bind(report)(sequen);
            papara = sequen.PauseIcon;
            _fun00004_ip = 2561; continue _fun00003;
 2543:
            sequen = 29;
            sequen = status[sequen];
            sequen = target.bind(report)(sequen);
            papara = sequen.PlayIcon;
 2561:
            _fun00004_ip = 2581; continue _fun00003;
 2563:
            sequen = 28;
            sequen = status[sequen];
            sequen = target.bind(report)(sequen);
            papara = sequen.RetryIcon;
 2581:
            sequen = {};
            target = 'lg';
            sequen['size'] = target;
            sequen = vacuum.bind(report)(papara, sequen);
            update['children'] = sequen;
            update = vacuum.bind(report)(source, update);
            kiloes[1] = update;
            source = _closure1_slot10;
            vacuum = _closure1_slot0;
            sequen = _closure1_slot2;
            echoed = sequen[echoed];
            echoed = vacuum.bind(report)(echoed);
            update = echoed.VideoQuestPlayerControlButton;
            echoed = {};
            echoed['disabled'] = cntext;
            echoed['accessibilityRole'] = record;
            record = sequen[config];
            record = vacuum.bind(report)(record);
            cntext = record.intl;
            record = cntext.string;
            config = sequen[config];
            config = vacuum.bind(report)(config);
            config = config.t;
            config = config.zWDcND;
            config = record.bind(cntext)(config);
            echoed['accessibilityLabel'] = config;
            echoed['onPress'] = ctrled;
            ctrled = 31;
            ctrled = sequen[ctrled];
            ctrled = vacuum.bind(report)(ctrled);
            vacuum = ctrled.SkipForwardIcon;
            ctrled = {'color': null, 'width': 16, 'height': 16};
            sequen = sizing.icon;
            sequen = sequen.color;
            ctrled['color'] = sequen;
            ctrled = source.bind(report)(vacuum, ctrled);
            echoed['children'] = ctrled;
            echoed = source.bind(report)(update, echoed);
            kiloes[2] = echoed;
            offset['children'] = kiloes;
            offset = foxtra.bind(report)(romeon, offset);
            verify[2] = offset;
            offset = 'landscape';
            offset = offset === yankee;
            if(!offset) { _fun00004_ip = 2877; continue _fun00003 }
 2795:
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
 2877:
            verify[3] = offset;
            oscard['children'] = verify;
            oscard = option.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 2903:
            return entity;
        }
    };
    zuuluu['VideoQuestPlayer'] = michal;
    return entity;
})();