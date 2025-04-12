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
    report = {};
    tangon = 'function VideoQuestPlayerTsx1(currentTime,maxTimestamp,isQuestCompleted){return isQuestCompleted||currentTime<=maxTimestamp-1;}';
    report['code'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: t
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argBaz;
            if(entity) { _fun00002_ip = 23; continue _fun00001 }
 6:
            zuuluu = argBar;
            michal = 1;
            zuuluu = zuuluu - michal;
            michal = argFoo;
            entity = michal <= zuuluu;
 23:
            return entity;
        }
    };
    option = {};
    tangon['__closure'] = option;
    option = 597957814500.0;
    tangon['__workletHash'] = option;
    tangon['__initData'] = report;
    var _closure1_slot12 = tangon;
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
    var _closure1_slot13 = tangon;
    tangon = {};
    report = 'paused';
    tangon['PAUSED'] = report;
    report = 'playing';
    tangon['PLAYING'] = report;
    report = 'ended';
    tangon['ENDED'] = report;
    report = 'loading';
    tangon['LOADING'] = report;
    var _closure1_slot14 = tangon;
    report = {};
    option = "function VideoQuestPlayerTsx2(){const{showControls,playerState,PlayerState,withSpring,SUBTLE_SPRING}=this.__closure;const show=showControls.get()||playerState!==PlayerState.PLAYING;return{opacity:withSpring(show?1:0,SUBTLE_SPRING),pointerEvents:show?'auto':'none'};}";
    report['code'] = option;
    var _closure1_slot15 = report;
    report = {};
    option = 'function VideoQuestPlayerTsx3(){const{withTiming,progress,timingFast}=this.__closure;return{width:withTiming(progress.get()*100+"%",timingFast,\'animate-always\')};}';
    report['code'] = option;
    var _closure1_slot16 = report;
    report = 31;
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
            papara = entity.onLoad;
            var _closure2_slot0 = papara;
            yankee = entity.orientation;
            config = entity.safeAreaInsets;
            kiloes = entity.captionsEnabled;
            report = undefined;
            if(!(kiloes === report)) { _fun00004_ip = 46; continue _fun00003 }
 44:
            kiloes = false;
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
            entity = _closure1_slot13;
            sizing = entity.bind(report)();
            tangon = _closure1_slot4;
            zuuluu = tangon.useRef;
            entity = null;
            variable36 = zuuluu.bind(tangon)(entity);
            _closure2_slot1 = variable36;
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            verify = 10;
            zuuluu = oscard[verify];
            option = tangon.bind(report)(zuuluu);
            zuuluu = option.useVideoQuestModalContext;
            zuuluu = zuuluu.bind(option)();
            record = zuuluu.quest;
            _closure2_slot2 = record;
            foxtra = zuuluu.videoSessionId;
            zuuluu = 11;
            zuuluu = oscard[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.useQuestTaskDetails;
            variable40 = zuuluu.bind(tangon)(record);
            _closure2_slot3 = variable40;
            tangon = record.userStatus;
            oscard = entity == tangon;
            zuuluu = undefined;
            if(oscard) { _fun00004_ip = 267; continue _fun00003 }
 261:
            zuuluu = tangon.completedAt;
 267:
            whisks = entity != zuuluu;
            _closure2_slot4 = whisks;
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
            variable38 = option.bind(romeon)(tangon, record);
            tangon = zuuluu[oscard];
            option = offset.bind(report)(tangon);
            tangon = option.resolveVideoQuestAsset;
            zuuluu = zuuluu[oscard];
            zuuluu = offset.bind(report)(zuuluu);
            zuuluu = zuuluu.VideoQuestAssetId;
            zuuluu = zuuluu.VIDEO_PLAYER_VIDEO_HLS;
            variable39 = tangon.bind(option)(zuuluu, record);
            tangon = entity == variable39;
            zuuluu = undefined;
            if(tangon) { _fun00004_ip = 384; continue _fun00003 }
 379:
            zuuluu = variable39.url;
 384:
            if(!(entity == zuuluu)) { _fun00004_ip = 419; continue _fun00003 }
 388:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[oscard];
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.VideoQuestAssetId;
            romeon = zuuluu.VIDEO_PLAYER_VIDEO;
            _fun00004_ip = 448; continue _fun00003;
 419:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[oscard];
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.VideoQuestAssetId;
            romeon = zuuluu.VIDEO_PLAYER_VIDEO_HLS;
 448:
            sequen = _closure1_slot4;
            tangon = sequen.useState;
            zuuluu = variable40.targetSeconds;
            zuuluu = tangon.bind(sequen)(zuuluu);
            output = _closure1_slot3;
            tangon = 2;
            zuuluu = output.bind(report)(zuuluu, tangon);
            update = 0;
            status = zuuluu[update];
            _closure2_slot5 = status;
            offset = 1;
            zuuluu = zuuluu[offset];
            _closure2_slot6 = zuuluu;
            echoed = _closure1_slot8;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.setVideoProgress;
                return entity;
            };
            variable37 = echoed.bind(report)(zuuluu);
            _closure2_slot7 = variable37;
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 13;
            zuuluu = option[zuuluu];
            zuuluu = oscard.bind(report)(zuuluu);
            result = zuuluu.shallow;
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
            vacuum = echoed.bind(report)(zuuluu, result);
            _closure2_slot8 = vacuum;
            result = sequen.useState;
            source = _closure1_slot14;
            zuuluu = source.PAUSED;
            zuuluu = result.bind(sequen)(zuuluu);
            tangon = output.bind(report)(zuuluu, tangon);
            zuuluu = tangon[update];
            _closure2_slot9 = zuuluu;
            tangon = tangon[offset];
            _closure2_slot10 = tangon;
            result = 14;
            tangon = option[result];
            output = oscard.bind(report)(tangon);
            offset = output.useSharedValue;
            tangon = false;
            variable41 = offset.bind(output)(tangon);
            _closure2_slot11 = variable41;
            tangon = option[result];
            output = oscard.bind(report)(tangon);
            offset = output.useAnimatedStyle;
            tangon = function() { // Original name: L
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = _closure2_slot11;
                    michal = zuuluu.get;
                    zuuluu = michal.bind(zuuluu)();
                    if(zuuluu) { _fun00008_ip = 40; continue _fun00007 }
 19:
                    michal = _closure2_slot9;
                    entity = _closure1_slot14;
                    entity = entity.PLAYING;
                    zuuluu = michal !== entity;
 40:
                    entity = {};
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 15;
                    tangon = oscard[tangon];
                    option = undefined;
                    oscard = report.bind(option)(tangon);
                    report = oscard.withSpring;
                    tangon = 0;
                    if(!zuuluu) { _fun00008_ip = 80; continue _fun00007 }
 77:
                    tangon = 1;
 80:
                    golfie = _closure1_slot0;
                    verify = _closure1_slot2;
                    michal = 16;
                    michal = verify[michal];
                    michal = golfie.bind(option)(michal);
                    michal = michal.SUBTLE_SPRING;
                    michal = report.bind(oscard)(tangon, michal);
                    entity['opacity'] = michal;
                    michal = 'none';
                    if(!zuuluu) { _fun00008_ip = 127; continue _fun00007 }
 123:
                    michal = 'auto';
 127:
                    entity['pointerEvents'] = michal;
                    return entity;
                }
            };
            echoed = {};
            echoed['showControls'] = variable41;
            echoed['playerState'] = zuuluu;
            echoed['PlayerState'] = source;
            source = 15;
            source = option[source];
            source = oscard.bind(report)(source);
            source = source.withSpring;
            echoed['withSpring'] = source;
            source = 16;
            source = option[source];
            source = oscard.bind(report)(source);
            source = source.SUBTLE_SPRING;
            echoed['SUBTLE_SPRING'] = source;
            tangon['__closure'] = echoed;
            echoed = 15670839398282.0;
            tangon['__workletHash'] = echoed;
            echoed = _closure1_slot15;
            tangon['__initData'] = echoed;
            echoed = offset.bind(output)(tangon);
            tangon = option[result];
            offset = oscard.bind(report)(tangon);
            tangon = offset.useSharedValue;
            variable43 = tangon.bind(offset)(update);
            _closure2_slot12 = variable43;
            tangon = option[result];
            output = oscard.bind(report)(tangon);
            offset = output.useAnimatedStyle;
            tangon = function() { // Original name: R
                entity = {};
                golfie = _closure1_slot0;
                option = _closure1_slot2;
                michal = 17;
                michal = option[michal];
                tangon = undefined;
                oscard = golfie.bind(tangon)(michal);
                report = oscard.withTiming;
                zuuluu = _closure2_slot12;
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
            source['progress'] = variable43;
            ctrled = 18;
            ctrled = option[ctrled];
            ctrled = oscard.bind(report)(ctrled);
            ctrled = ctrled.timingFast;
            source['timingFast'] = ctrled;
            tangon['__closure'] = source;
            source = 3148623805015.0;
            tangon['__workletHash'] = source;
            source = _closure1_slot16;
            tangon['__initData'] = source;
            output = offset.bind(output)(tangon);
            offset = sequen.useRef;
            tangon = -1;
            tangon = offset.bind(sequen)(tangon);
            _closure2_slot13 = tangon;
            source = sequen.useCallback;
            offset = new Array(1);
            offset[0] = variable41;
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
                        zuuluu = _closure2_slot13;
                        oscard = zuuluu.current;
                        zuuluu = undefined;
                        oscard = golfie.bind(zuuluu)(oscard);
                        option = _closure2_slot11;
                        golfie = option.set;
                        oscard = true;
                        oscard = golfie.bind(option)(oscard);
                        michal = _closure2_slot13;
                        golfie = entity.setTimeout;
                        oscard = function() {
                            zuuluu = _closure2_slot11;
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
            cntext = _closure1_slot1;
            tangon = 19;
            tangon = option[tangon];
            offset = cntext.bind(report)(tangon);
            tangon = {};
            tangon['duration'] = status;
            tangon['isQuestCompleted'] = whisks;
            tangon['playerState'] = zuuluu;
            source = record.id;
            tangon['questId'] = source;
            tangon['videoSessionId'] = foxtra;
            tangon['videoAssetId'] = romeon;
            source = offset.bind(report)(tangon);
            quebec = source.handleBufferAnalytics;
            tangon = source.handleEndAnalytics;
            _closure2_slot14 = tangon;
            target = source.handleErrorAnalytics;
            variable44 = source.handleLoadAnalytics;
            _closure2_slot15 = variable44;
            sierra = source.handleLoadStartAnalytics;
            variable42 = source.handlePausePlaybackAnalytics;
            _closure2_slot16 = variable42;
            offset = source.handleProgressAnalytics;
            _closure2_slot17 = offset;
            romeon = source.handleReadyForDisplayAnalytics;
            foxtra = source.handleResumePlaybackAnalytics;
            _closure2_slot18 = foxtra;
            source = source.handleSeekAnalytics;
            _closure2_slot19 = source;
            equals = sequen.useCallback;
            limora = new Array(4);
            limora[0] = whisks;
            variable45 = vacuum.timestampSec;
            limora[1] = variable45;
            limora[2] = variable44;
            limora[3] = papara;
            papara = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = argFoo;
                    golfie = zuuluu.duration;
                    tangon = _closure2_slot6;
                    entity = undefined;
                    tangon = tangon.bind(entity)(golfie);
                    tangon = _closure2_slot15;
                    tangon = tangon.bind(entity)();
                    tangon = _closure2_slot1;
                    tangon = tangon.current;
                    report = null;
                    if(!(report != tangon)) { _fun00012_ip = 145; continue _fun00011 }
 45:
                    tangon = _closure2_slot8;
                    option = tangon.timestampSec;
                    oscard = _closure2_slot4;
                    tangon = !oscard;
                    if(oscard) { _fun00012_ip = 76; continue _fun00011 }
 65:
                    oscard = 3;
                    oscard = golfie - oscard;
                    tangon = option < oscard;
 76:
                    if(!tangon) { _fun00012_ip = 106; continue _fun00011 }
 79:
                    tangon = _closure2_slot1;
                    golfie = tangon.current;
                    oscard = golfie.seek;
                    tangon = 1;
                    tangon = option - tangon;
                    tangon = oscard.bind(golfie)(tangon);
 106:
                    oscard = _closure2_slot10;
                    tangon = _closure1_slot14;
                    tangon = tangon.PLAYING;
                    tangon = oscard.bind(entity)(tangon);
                    tangon = _closure2_slot0;
                    if(!(report != tangon)) { _fun00012_ip = 145; continue _fun00011 }
 136:
                    michal = _closure2_slot0;
                    michal = michal.bind(entity)(zuuluu);
 145:
                    return entity;
                }
            };
            equals = equals.bind(sequen)(papara, limora);
            limora = sequen.useCallback;
            papara = new Array(3);
            papara[0] = zuuluu;
            papara[1] = variable42;
            papara[2] = foxtra;
            foxtra = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    tangon = _closure2_slot9;
                    zuuluu = _closure1_slot14;
                    zuuluu = zuuluu.PAUSED;
                    if(!(tangon !== zuuluu)) { _fun00014_ip = 73; continue _fun00013 }
 24:
                    tangon = _closure2_slot9;
                    zuuluu = _closure1_slot14;
                    zuuluu = zuuluu.PLAYING;
                    if(!(tangon === zuuluu)) { _fun00014_ip = 102; continue _fun00013 }
 42:
                    report = _closure2_slot10;
                    zuuluu = _closure1_slot14;
                    zuuluu = zuuluu.PAUSED;
                    tangon = undefined;
                    zuuluu = report.bind(tangon)(zuuluu);
                    zuuluu = _closure2_slot16;
                    zuuluu = zuuluu.bind(tangon)();
                    _fun00014_ip = 102; continue _fun00013;
 73:
                    tangon = _closure2_slot10;
                    michal = _closure1_slot14;
                    zuuluu = michal.PLAYING;
                    michal = undefined;
                    zuuluu = tangon.bind(michal)(zuuluu);
                    entity = _closure2_slot18;
                    entity = entity.bind(michal)();
 102:
                    entity = undefined;
                    return entity;
                }
            };
            limora = limora.bind(sequen)(foxtra, papara);
            _closure2_slot20 = limora;
            papara = ctrled.bind(report)(limora);
            foxtra = sequen.useContext;
            verify = option[verify];
            verify = cntext.bind(report)(verify);
            verify = foxtra.bind(sequen)(verify);
            verify = verify.isModalPanGestureActive;
            _closure2_slot21 = verify;
            cntext = sequen.useCallback;
            foxtra = new Array(3);
            foxtra[0] = variable41;
            foxtra[1] = limora;
            foxtra[2] = verify;
            verify = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    michal = _closure2_slot21;
                    michal = michal.current;
                    if(michal) { _fun00016_ip = 57; continue _fun00015 }
 15:
                    zuuluu = _closure2_slot11;
                    michal = zuuluu.get;
                    michal = michal.bind(zuuluu)();
                    if(!michal) { _fun00016_ip = 47; continue _fun00015 }
 31:
                    tangon = _closure2_slot11;
                    zuuluu = tangon.set;
                    michal = false;
                    michal = zuuluu.bind(tangon)(michal);
 47:
                    michal = _closure2_slot20;
                    entity = undefined;
                    entity = michal.bind(entity)();
 57:
                    entity = undefined;
                    return entity;
                }
            };
            verify = cntext.bind(sequen)(verify, foxtra);
            limora = _closure1_slot12;
            cntext = vacuum.timestampSec;
            foxtra = vacuum.maxTimestampSec;
            foxtra = limora.bind(report)(cntext, foxtra, whisks);
            cntext = !foxtra;
            _closure2_slot22 = cntext;
            whisks = sequen.useCallback;
            limora = new Array(5);
            limora[0] = status;
            limora[1] = variable43;
            foxtra = vacuum.maxTimestampSec;
            limora[2] = foxtra;
            limora[3] = source;
            limora[4] = cntext;
            foxtra = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    michal = _closure2_slot1;
                    zuuluu = michal.current;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00018_ip = 112; continue _fun00017 }
 18:
                    zuuluu = _closure2_slot12;
                    michal = zuuluu.get;
                    zuuluu = michal.bind(zuuluu)();
                    michal = _closure2_slot5;
                    zuuluu = zuuluu * michal;
                    michal = _closure2_slot22;
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
                    michal = _closure2_slot19;
                    entity = undefined;
                    entity = michal.bind(entity)();
 112:
                    entity = undefined;
                    return entity;
                }
            };
            foxtra = whisks.bind(sequen)(foxtra, limora);
            variable41 = sequen.useCallback;
            whisks = new Array(3);
            whisks[0] = status;
            whisks[1] = variable43;
            whisks[2] = source;
            limora = function(argFoo) {
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
                    tangon = _closure2_slot12;
                    zuuluu = tangon.set;
                    michal = argFoo;
                    report = michal.currentTime;
                    michal = _closure2_slot5;
                    michal = report / michal;
                    michal = zuuluu.bind(tangon)(michal);
 59:
                    michal = _closure2_slot19;
                    entity = undefined;
                    entity = michal.bind(entity)();
 69:
                    entity = undefined;
                    return entity;
                }
            };
            whisks = variable41.bind(sequen)(limora, whisks);
            variable41 = sequen.useCallback;
            limora = new Array(3);
            limora[0] = status;
            limora[1] = variable43;
            limora[2] = source;
            source = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    michal = _closure2_slot1;
                    zuuluu = michal.current;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00022_ip = 97; continue _fun00021 }
 18:
                    zuuluu = _closure2_slot12;
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
                    michal = _closure2_slot19;
                    entity = undefined;
                    entity = michal.bind(entity)();
 97:
                    entity = undefined;
                    return entity;
                }
            };
            source = variable41.bind(sequen)(source, limora);
            source = ctrled.bind(report)(source);
            ctrled = ctrled.bind(report)(foxtra);
            foxtra = sequen.useRef;
            variable42 = foxtra.bind(sequen)(update);
            _closure2_slot23 = variable42;
            foxtra = sequen.useRef;
            variable41 = foxtra.bind(sequen)(update);
            _closure2_slot24 = variable41;
            limora = sequen.useCallback;
            foxtra = new Array(7);
            foxtra[0] = variable43;
            foxtra[1] = record;
            foxtra[2] = variable42;
            foxtra[3] = variable41;
            variable40 = variable40.taskType;
            foxtra[4] = variable40;
            foxtra[5] = variable37;
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
                    zuuluu = _closure2_slot23;
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
                    oscard = _closure2_slot17;
                    report = entity.seekableDuration;
                    zuuluu = entity.currentTime;
                    zuuluu = oscard.bind(golfie)(tangon, report, zuuluu);
                    report = _closure2_slot23;
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
                    zuuluu = _closure2_slot24;
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
                    report = _closure2_slot24;
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
                    zuuluu = _closure2_slot12;
                    michal = zuuluu.set;
                    michal = michal.bind(zuuluu)(tangon);
                    return entity;
                }
            };
            limora = limora.bind(sequen)(offset, foxtra);
            foxtra = sequen.useCallback;
            offset = new Array(3);
            offset[0] = status;
            offset[1] = record;
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
                michal = _closure2_slot14;
                michal = michal.bind(entity)();
                return entity;
            };
            status = foxtra.bind(sequen)(tangon, offset);
            foxtra = sequen.useMemo;
            offset = new Array(1);
            offset[0] = record;
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
            if(!(entity != variable38)) { _fun00004_ip = 2682; continue _fun00003 }
 1589:
            sequen = !michal;
            if(!michal) { _fun00004_ip = 1609; continue _fun00003 }
 1595:
            michal = _closure1_slot14;
            michal = michal.PAUSED;
            sequen = zuuluu === michal;
 1609:
            tangon = _closure1_slot10;
            zuuluu = _closure1_slot5;
            michal = {};
            option = sizing.container;
            oscard = new Array(2);
            oscard[0] = option;
            oscard[1] = golfie;
            michal['style'] = oscard;
            option = _closure1_slot11;
            golfie = _closure1_slot6;
            oscard = {};
            offset = sizing.videoContainer;
            oscard['style'] = offset;
            oscard['onPress'] = verify;
            offset = _closure1_slot1;
            variable37 = _closure1_slot2;
            verify = 23;
            verify = variable37[verify];
            offset = offset.bind(report)(verify);
            verify = {};
            variable37 = 'mix';
            verify['mixWithOthers'] = variable37;
            verify['ref'] = variable36;
            variable36 = sizing.video;
            verify['style'] = variable36;
            verify['paused'] = sequen;
            variable36 = {};
            variable40 = entity == variable39;
            variable37 = undefined;
            if(variable40) { _fun00004_ip = 1730; continue _fun00003 }
 1725:
            variable37 = variable39.url;
 1730:
            if(!(entity == variable37)) { _fun00004_ip = 1739; continue _fun00003 }
 1734:
            variable37 = variable38.url;
 1739:
            variable36['uri'] = variable37;
            verify['source'] = variable36;
            verify['onBuffer'] = quebec;
            verify['onLoad'] = equals;
            verify['onSeek'] = whisks;
            verify['onProgress'] = limora;
            verify['onLoadStart'] = sierra;
            verify['onEnd'] = status;
            verify['onError'] = target;
            verify['onReadyForDisplay'] = romeon;
            target = entity == foxtra;
            romeon = undefined;
            if(target) { _fun00004_ip = 1801; continue _fun00003 }
 1796:
            romeon = foxtra.url;
 1801:
            verify['poster'] = romeon;
            romeon = 'contain';
            verify['posterResizeMode'] = romeon;
            verify['resizeMode'] = romeon;
            offset = tangon.bind(report)(offset, verify);
            verify = new Array(4);
            verify[0] = offset;
            foxtra = _closure1_slot10;
            romeon = _closure1_slot0;
            target = _closure1_slot2;
            offset = 24;
            offset = target[offset];
            offset = romeon.bind(report)(offset);
            romeon = offset.VideoQuestCaptions;
            offset = {};
            offset['quest'] = record;
            vacuum = vacuum.timestampSec;
            offset['currentTime'] = vacuum;
            offset['visible'] = kiloes;
            kiloes = {};
            vacuum = entity == config;
            record = undefined;
            if(vacuum) { _fun00004_ip = 1903; continue _fun00003 }
 1898:
            record = config.top;
 1903:
            target = entity != record;
            vacuum = 0;
            if(!target) { _fun00004_ip = 1915; continue _fun00003 }
 1912:
            vacuum = record;
 1915:
            kiloes['top'] = vacuum;
            vacuum = entity == config;
            record = undefined;
            if(vacuum) { _fun00004_ip = 1933; continue _fun00003 }
 1928:
            record = config.bottom;
 1933:
            target = entity != record;
            vacuum = 0;
            if(!target) { _fun00004_ip = 1945; continue _fun00003 }
 1942:
            vacuum = record;
 1945:
            kiloes['bottom'] = vacuum;
            vacuum = entity == config;
            record = undefined;
            if(vacuum) { _fun00004_ip = 1963; continue _fun00003 }
 1958:
            record = config.left;
 1963:
            target = entity != record;
            vacuum = 0;
            if(!target) { _fun00004_ip = 1975; continue _fun00003 }
 1972:
            vacuum = record;
 1975:
            kiloes['left'] = vacuum;
            record = entity == config;
            vacuum = undefined;
            if(record) { _fun00004_ip = 1993; continue _fun00003 }
 1988:
            vacuum = config.right;
 1993:
            config = entity != vacuum;
            update = 0;
            if(!config) { _fun00004_ip = 2005; continue _fun00003 }
 2002:
            update = vacuum;
 2005:
            kiloes['right'] = update;
            offset['style'] = kiloes;
            offset = foxtra.bind(report)(romeon, offset);
            verify[1] = offset;
            foxtra = _closure1_slot11;
            romeon = _closure1_slot1;
            target = _closure1_slot2;
            offset = target[result];
            offset = romeon.bind(report)(offset);
            romeon = offset.View;
            offset = {};
            update = sizing.controls;
            kiloes = new Array(2);
            kiloes[0] = update;
            kiloes[1] = echoed;
            offset['style'] = kiloes;
            vacuum = _closure1_slot10;
            limora = _closure1_slot0;
            echoed = 25;
            kiloes = target[echoed];
            kiloes = limora.bind(report)(kiloes);
            update = kiloes.VideoQuestPlayerControlButton;
            kiloes = {};
            record = 'button';
            kiloes['accessibilityRole'] = record;
            config = 26;
            status = target[config];
            status = limora.bind(report)(status);
            whisks = status.intl;
            sierra = whisks.string;
            status = target[config];
            status = limora.bind(report)(status);
            status = status.t;
            status = status.r9s3Ul;
            status = sierra.bind(whisks)(status);
            kiloes['accessibilityLabel'] = status;
            kiloes['onPress'] = source;
            source = 27;
            source = target[source];
            source = limora.bind(report)(source);
            status = source.SkipBackwardIcon;
            source = {'color': null, 'width': 16, 'height': 16};
            sierra = sizing.icon;
            sierra = sierra.color;
            source['color'] = sierra;
            source = vacuum.bind(report)(status, source);
            kiloes['children'] = source;
            update = vacuum.bind(report)(update, kiloes);
            kiloes = new Array(3);
            kiloes[0] = update;
            update = target[echoed];
            update = limora.bind(report)(update);
            source = update.VideoQuestPlayerControlButton;
            update = {};
            update['accessibilityRole'] = record;
            status = target[config];
            status = limora.bind(report)(status);
            sierra = status.intl;
            status = sierra.string;
            target = target[config];
            target = limora.bind(report)(target);
            target = target.t;
            target = target.RscU7O;
            target = status.bind(sierra)(target);
            update['accessibilityLabel'] = target;
            update['onPress'] = papara;
            target = _closure1_slot0;
            status = _closure1_slot2;
            if(sequen) { _fun00004_ip = 2342; continue _fun00003 }
 2322:
            sequen = 29;
            sequen = status[sequen];
            sequen = target.bind(report)(sequen);
            papara = sequen.PauseIcon;
            _fun00004_ip = 2360; continue _fun00003;
 2342:
            sequen = 28;
            sequen = status[sequen];
            sequen = target.bind(report)(sequen);
            papara = sequen.PlayIcon;
 2360:
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
            ctrled = 30;
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
            if(!offset) { _fun00004_ip = 2656; continue _fun00003 }
 2574:
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
 2656:
            verify[3] = offset;
            oscard['children'] = verify;
            oscard = option.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 2682:
            return entity;
        }
    };
    zuuluu['VideoQuestPlayer'] = michal;
    return entity;
})();