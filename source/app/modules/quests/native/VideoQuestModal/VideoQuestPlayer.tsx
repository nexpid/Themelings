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
    kiloes = tangon.StyleSheet;
    report = tangon.Pressable;
    var _closure1_slot6 = report;
    tangon = tangon.ActivityIndicator;
    var _closure1_slot7 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 4;
    tangon = golfie[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 5;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.AppStates;
    var _closure1_slot10 = tangon;
    tangon = 6;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    report = tangon.jsx;
    var _closure1_slot11 = report;
    tangon = tangon.jsxs;
    var _closure1_slot12 = tangon;
    tangon = {};
    report = 'function hasVideoEnded_VideoQuestPlayerTsx1(currentTime,videoDuration){return currentTime>=videoDuration-1;}';
    tangon['code'] = report;
    var _closure1_slot13 = tangon;
    tangon = function() {
        entity = function(argFoo, argBar) { // Original name: hasVideoEnded
            michal = argBar;
            entity = 1;
            michal = michal - entity;
            entity = argFoo;
            entity = entity >= michal;
            return entity;
        };
        michal = {};
        entity['__closure'] = michal;
        michal = 3281537893520.0;
        entity['__workletHash'] = michal;
        michal = _closure1_slot13;
        entity['__initData'] = michal;
        return entity;
    };
    verify = tangon.bind(entity)();
    var _closure1_slot14 = verify;
    report = {};
    tangon = 'function VideoQuestPlayerTsx2(currentTime,maxTimestamp,videoDuration,isQuestCompleted){const{hasVideoEnded}=this.__closure;return!hasVideoEnded(currentTime,videoDuration)&&(isQuestCompleted||currentTime<=maxTimestamp-1);}';
    report['code'] = tangon;
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: t
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            michal = argCor;
            report = _closure1_slot14;
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
    var _closure1_slot15 = tangon;
    tangon = 7;
    tangon = golfie[tangon];
    option = oscard.bind(entity)(tangon);
    report = option.createStyles;
    tangon = {};
    verify = {};
    update = kiloes.absoluteFillObject;
    source = verify;
    offset = copyDataProperties(source, update);
    offset = 8;
    romeon = golfie[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.BG_BASE_TERTIARY;
    sizing = 'backgroundColor';
    verify[sizing] = romeon;
    tangon['container'] = verify;
    verify = {};
    update = kiloes.absoluteFillObject;
    source = verify;
    romeon = copyDataProperties(source, update);
    romeon = golfie[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.BG_BASE_TERTIARY;
    verify[sizing] = romeon;
    foxtra = 'center';
    backup = 'justifyContent';
    verify[backup] = foxtra;
    romeon = 'alignItems';
    verify[romeon] = foxtra;
    tangon['loadingContainer'] = verify;
    verify = {'height': '100%', 'width': '100%'};
    tangon['video'] = verify;
    verify = {'position': 'relative', 'height': '100%', 'width': '100%'};
    tangon['videoContainer'] = verify;
    verify = {};
    update = kiloes.absoluteFillObject;
    source = verify;
    kiloes = copyDataProperties(source, update);
    kiloes = 9;
    kiloes = golfie[kiloes];
    output = yankee.bind(entity)(kiloes);
    kiloes = golfie[offset];
    kiloes = yankee.bind(entity)(kiloes);
    kiloes = kiloes.unsafe_rawColors;
    kiloes = kiloes.BLACK_500;
    result = output.bind(entity)(kiloes);
    output = result.alpha;
    kiloes = 0.5;
    output = output.bind(result)(kiloes);
    kiloes = output.hex;
    kiloes = kiloes.bind(output)();
    verify[sizing] = kiloes;
    verify[backup] = foxtra;
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
    var _closure1_slot16 = tangon;
    tangon = {};
    report = 'paused';
    tangon['PAUSED'] = report;
    report = 'playing';
    tangon['PLAYING'] = report;
    report = 'ended';
    tangon['ENDED'] = report;
    report = 'loading';
    tangon['LOADING'] = report;
    report = 'errored';
    tangon['ERRORED'] = report;
    var _closure1_slot17 = tangon;
    report = {};
    option = "function VideoQuestPlayerTsx3(){const{hasLoaded,showControls,playerState,PlayerState,isVideoEnded,externallyPaused,withSpring,SUBTLE_SPRING}=this.__closure;const show=hasLoaded&&(showControls.get()||playerState===PlayerState.PAUSED||playerState===PlayerState.ENDED||playerState===PlayerState.ERRORED||isVideoEnded||externallyPaused);return{opacity:withSpring(show?1:0,SUBTLE_SPRING),pointerEvents:show?'auto':'none'};}";
    report['code'] = option;
    var _closure1_slot18 = report;
    report = {};
    option = 'function VideoQuestPlayerTsx4(){const{withTiming,progress,timingFast}=this.__closure;return{width:withTiming(progress.get()*100+"%",timingFast,\'animate-always\')};}';
    report['code'] = option;
    var _closure1_slot19 = report;
    report = 37;
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
            sequen = entity.safeAreaInsets;
            variable36 = entity.handleToggleCaptions;
            status = entity.handleOpenTranscript;
            michal = entity.externallyPaused;
            var _closure2_slot1 = michal;
            variable39 = entity.captionsEnabled;
            report = undefined;
            if(!(variable39 === report)) { _fun00004_ip = 68; continue _fun00003 }
 66:
            variable39 = false;
 68:
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
            var _closure2_slot28 = report;
            var _closure2_slot29 = report;
            var _closure2_slot30 = report;
            var _closure2_slot31 = report;
            var _closure2_slot32 = report;
            entity = _closure1_slot16;
            sizing = entity.bind(report)();
            oscard = _closure1_slot4;
            tangon = oscard.useRef;
            entity = null;
            variable45 = tangon.bind(oscard)(entity);
            _closure2_slot2 = variable45;
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            variable49 = 10;
            tangon = option[variable49];
            verify = oscard.bind(report)(tangon);
            tangon = verify.useVideoQuestModalContext;
            tangon = tangon.bind(verify)();
            vacuum = tangon.quest;
            _closure2_slot3 = vacuum;
            yankee = tangon.videoSessionId;
            tangon = 11;
            tangon = option[tangon];
            oscard = oscard.bind(report)(tangon);
            tangon = oscard.useQuestTaskDetails;
            variable38 = tangon.bind(oscard)(vacuum);
            _closure2_slot4 = variable38;
            oscard = vacuum.userStatus;
            option = entity == oscard;
            tangon = undefined;
            if(option) { _fun00004_ip = 317; continue _fun00003 }
 311:
            tangon = oscard.completedAt;
 317:
            variable41 = entity != tangon;
            _closure2_slot5 = variable41;
            offset = _closure1_slot0;
            tangon = _closure1_slot2;
            verify = 12;
            oscard = tangon[verify];
            romeon = offset.bind(report)(oscard);
            option = romeon.resolveVideoQuestAsset;
            oscard = tangon[verify];
            oscard = offset.bind(report)(oscard);
            oscard = oscard.VideoQuestAssetId;
            oscard = oscard.VIDEO_PLAYER_VIDEO;
            variable47 = option.bind(romeon)(oscard, vacuum);
            oscard = tangon[verify];
            option = offset.bind(report)(oscard);
            oscard = option.resolveVideoQuestAsset;
            tangon = tangon[verify];
            tangon = offset.bind(report)(tangon);
            tangon = tangon.VideoQuestAssetId;
            tangon = tangon.VIDEO_PLAYER_VIDEO_HLS;
            variable48 = oscard.bind(option)(tangon, vacuum);
            oscard = entity == variable48;
            tangon = undefined;
            if(oscard) { _fun00004_ip = 434; continue _fun00003 }
 429:
            tangon = variable48.url;
 434:
            if(!(entity == tangon)) { _fun00004_ip = 469; continue _fun00003 }
 438:
            oscard = _closure1_slot0;
            tangon = _closure1_slot2;
            tangon = tangon[verify];
            tangon = oscard.bind(report)(tangon);
            tangon = tangon.VideoQuestAssetId;
            option = tangon.VIDEO_PLAYER_VIDEO;
            _fun00004_ip = 498; continue _fun00003;
 469:
            oscard = _closure1_slot0;
            tangon = _closure1_slot2;
            tangon = tangon[verify];
            tangon = oscard.bind(report)(tangon);
            tangon = tangon.VideoQuestAssetId;
            option = tangon.VIDEO_PLAYER_VIDEO_HLS;
 498:
            verify = _closure1_slot4;
            oscard = verify.useState;
            tangon = variable38.targetSeconds;
            tangon = oscard.bind(verify)(tangon);
            oscard = _closure1_slot3;
            variable51 = 2;
            tangon = oscard.bind(report)(tangon, variable51);
            ctrled = 0;
            papara = tangon[ctrled];
            _closure2_slot6 = papara;
            variable43 = 1;
            tangon = tangon[variable43];
            _closure2_slot7 = tangon;
            romeon = _closure1_slot9;
            tangon = function(argFoo) {
                entity = argFoo;
                entity = entity.setVideoProgress;
                return entity;
            };
            variable37 = romeon.bind(report)(tangon);
            _closure2_slot8 = variable37;
            offset = _closure1_slot0;
            foxtra = _closure1_slot2;
            tangon = 13;
            tangon = foxtra[tangon];
            tangon = offset.bind(report)(tangon);
            offset = tangon.shallow;
            tangon = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = argFoo;
                    michal = entity.videoProgress;
                    entity = _closure2_slot3;
                    entity = entity.id;
                    entity = michal[entity];
                    michal = null;
                    if(!(michal == entity)) { _fun00006_ip = 59; continue _fun00005 }
 31:
                    michal = {};
                    tangon = _closure2_slot4;
                    tangon = tangon.progressSeconds;
                    michal['timestampSec'] = tangon;
                    zuuluu = _closure2_slot6;
                    michal['duration'] = zuuluu;
                    entity = michal;
 59:
                    return entity;
                }
            };
            source = romeon.bind(report)(tangon, offset);
            _closure2_slot9 = source;
            offset = verify.useState;
            tangon = _closure1_slot17;
            tangon = tangon.LOADING;
            tangon = offset.bind(verify)(tangon);
            tangon = oscard.bind(report)(tangon, variable51);
            equals = tangon[ctrled];
            _closure2_slot10 = equals;
            tangon = tangon[variable43];
            _closure2_slot11 = tangon;
            tangon = verify.useState;
            offset = false;
            tangon = tangon.bind(verify)(offset);
            tangon = oscard.bind(report)(tangon, variable51);
            romeon = tangon[ctrled];
            _closure2_slot12 = romeon;
            tangon = tangon[variable43];
            _closure2_slot13 = tangon;
            whisks = romeon;
            if(!whisks) { _fun00004_ip = 711; continue _fun00003 }
 697:
            tangon = _closure1_slot17;
            tangon = tangon.ENDED;
            whisks = equals === tangon;
 711:
            if(!whisks) { _fun00004_ip = 735; continue _fun00003 }
 714:
            verify = _closure1_slot14;
            oscard = source.timestampSec;
            tangon = source.duration;
            whisks = verify.bind(report)(oscard, tangon);
 735:
            _closure2_slot14 = whisks;
            record = _closure1_slot0;
            verify = _closure1_slot2;
            result = 14;
            tangon = verify[result];
            oscard = record.bind(report)(tangon);
            tangon = oscard.useSharedValue;
            variable42 = tangon.bind(oscard)(offset);
            _closure2_slot15 = variable42;
            tangon = verify[result];
            foxtra = record.bind(report)(tangon);
            oscard = foxtra.useAnimatedStyle;
            tangon = function() { // Original name: F
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = _closure2_slot12;
                    if(!zuuluu) { _fun00008_ip = 112; continue _fun00007 }
 10:
                    tangon = _closure2_slot15;
                    entity = tangon.get;
                    entity = entity.bind(tangon)();
                    if(entity) { _fun00008_ip = 47; continue _fun00007 }
 26:
                    report = _closure2_slot10;
                    tangon = _closure1_slot17;
                    tangon = tangon.PAUSED;
                    entity = report === tangon;
 47:
                    if(entity) { _fun00008_ip = 71; continue _fun00007 }
 50:
                    report = _closure2_slot10;
                    tangon = _closure1_slot17;
                    tangon = tangon.ENDED;
                    entity = report === tangon;
 71:
                    if(entity) { _fun00008_ip = 95; continue _fun00007 }
 74:
                    report = _closure2_slot10;
                    tangon = _closure1_slot17;
                    tangon = tangon.ERRORED;
                    entity = report === tangon;
 95:
                    if(entity) { _fun00008_ip = 102; continue _fun00007 }
 98:
                    entity = _closure2_slot14;
 102:
                    if(entity) { _fun00008_ip = 109; continue _fun00007 }
 105:
                    entity = _closure2_slot1;
 109:
                    zuuluu = entity;
 112:
                    entity = {};
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 15;
                    tangon = oscard[tangon];
                    option = undefined;
                    oscard = report.bind(option)(tangon);
                    report = oscard.withSpring;
                    tangon = 0;
                    if(!zuuluu) { _fun00008_ip = 152; continue _fun00007 }
 149:
                    tangon = 1;
 152:
                    golfie = _closure1_slot0;
                    verify = _closure1_slot2;
                    michal = 16;
                    michal = verify[michal];
                    michal = golfie.bind(option)(michal);
                    michal = michal.SUBTLE_SPRING;
                    michal = report.bind(oscard)(tangon, michal);
                    entity['opacity'] = michal;
                    michal = 'none';
                    if(!zuuluu) { _fun00008_ip = 199; continue _fun00007 }
 195:
                    michal = 'auto';
 199:
                    entity['pointerEvents'] = michal;
                    return entity;
                }
            };
            output = {};
            output['hasLoaded'] = romeon;
            output['showControls'] = variable42;
            output['playerState'] = equals;
            romeon = _closure1_slot17;
            output['PlayerState'] = romeon;
            output['isVideoEnded'] = whisks;
            output['externallyPaused'] = michal;
            echoed = 15;
            echoed = verify[echoed];
            echoed = record.bind(report)(echoed);
            echoed = echoed.withSpring;
            output['withSpring'] = echoed;
            echoed = 16;
            echoed = verify[echoed];
            echoed = record.bind(report)(echoed);
            echoed = echoed.SUBTLE_SPRING;
            output['SUBTLE_SPRING'] = echoed;
            tangon['__closure'] = output;
            output = 4466097445215.0;
            tangon['__workletHash'] = output;
            output = _closure1_slot18;
            tangon['__initData'] = output;
            update = oscard.bind(foxtra)(tangon);
            tangon = verify[result];
            oscard = record.bind(report)(tangon);
            tangon = oscard.useSharedValue;
            variable46 = tangon.bind(oscard)(ctrled);
            _closure2_slot16 = variable46;
            tangon = verify[result];
            foxtra = record.bind(report)(tangon);
            oscard = foxtra.useAnimatedStyle;
            tangon = function() { // Original name: Q
                entity = {};
                golfie = _closure1_slot0;
                option = _closure1_slot2;
                michal = 17;
                michal = option[michal];
                tangon = undefined;
                oscard = golfie.bind(tangon)(michal);
                report = oscard.withTiming;
                zuuluu = _closure2_slot16;
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
            output = {};
            echoed = 17;
            echoed = verify[echoed];
            echoed = record.bind(report)(echoed);
            echoed = echoed.withTiming;
            output['withTiming'] = echoed;
            output['progress'] = variable46;
            echoed = 18;
            echoed = verify[echoed];
            echoed = record.bind(report)(echoed);
            echoed = echoed.timingFast;
            output['timingFast'] = echoed;
            tangon['__closure'] = output;
            output = 13895400048400.0;
            tangon['__workletHash'] = output;
            output = _closure1_slot19;
            tangon['__initData'] = output;
            output = oscard.bind(foxtra)(tangon);
            limora = _closure1_slot4;
            oscard = limora.useRef;
            tangon = -1;
            tangon = oscard.bind(limora)(tangon);
            _closure2_slot17 = tangon;
            foxtra = limora.useCallback;
            oscard = new Array(1);
            oscard[0] = variable42;
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
                        zuuluu = _closure2_slot17;
                        oscard = zuuluu.current;
                        zuuluu = undefined;
                        oscard = golfie.bind(zuuluu)(oscard);
                        option = _closure2_slot15;
                        golfie = option.set;
                        oscard = true;
                        oscard = golfie.bind(option)(oscard);
                        michal = _closure2_slot17;
                        golfie = entity.setTimeout;
                        oscard = function() {
                            zuuluu = _closure2_slot15;
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
            cntext = foxtra.bind(limora)(tangon, oscard);
            sierra = _closure1_slot1;
            tangon = 19;
            tangon = verify[tangon];
            oscard = sierra.bind(report)(tangon);
            tangon = {};
            tangon['duration'] = papara;
            tangon['isQuestCompleted'] = variable41;
            tangon['playerState'] = equals;
            foxtra = vacuum.id;
            tangon['questId'] = foxtra;
            tangon['videoSessionId'] = yankee;
            tangon['videoAssetId'] = option;
            yankee = oscard.bind(report)(tangon);
            variable44 = yankee.handleBufferAnalytics;
            option = yankee.handleEndAnalytics;
            _closure2_slot18 = option;
            tangon = yankee.handleErrorAnalytics;
            _closure2_slot19 = tangon;
            variable50 = yankee.handleLoadAnalytics;
            _closure2_slot20 = variable50;
            oscard = yankee.handleLoadStartAnalytics;
            _closure2_slot21 = oscard;
            variable40 = yankee.handlePausePlaybackAnalytics;
            _closure2_slot22 = variable40;
            foxtra = yankee.handleProgressAnalytics;
            _closure2_slot23 = foxtra;
            target = yankee.handleReadyForDisplayAnalytics;
            _closure2_slot24 = target;
            echoed = yankee.handleResumePlaybackAnalytics;
            _closure2_slot25 = echoed;
            record = yankee.handleSeekAnalytics;
            _closure2_slot26 = record;
            yankee = limora.useState;
            quebec = yankee.bind(limora)(offset);
            yankee = _closure1_slot3;
            quebec = yankee.bind(report)(quebec, variable51);
            yankee = quebec[ctrled];
            quebec = quebec[variable43];
            _closure2_slot27 = quebec;
            variable43 = limora.useCallback;
            quebec = new Array(1);
            quebec[0] = target;
            target = function() {
                zuuluu = _closure2_slot24;
                entity = undefined;
                zuuluu = zuuluu.bind(entity)();
                zuuluu = _closure2_slot27;
                michal = true;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            target = variable43.bind(limora)(target, quebec);
            variable43 = limora.useCallback;
            quebec = new Array(4);
            quebec[0] = variable41;
            variable51 = source.timestampSec;
            quebec[1] = variable51;
            quebec[2] = variable50;
            quebec[3] = config;
            config = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = argFoo;
                    golfie = zuuluu.duration;
                    tangon = _closure2_slot7;
                    entity = undefined;
                    tangon = tangon.bind(entity)(golfie);
                    report = _closure2_slot13;
                    tangon = true;
                    tangon = report.bind(entity)(tangon);
                    tangon = _closure2_slot20;
                    tangon = tangon.bind(entity)();
                    tangon = _closure2_slot2;
                    tangon = tangon.current;
                    report = null;
                    if(!(report != tangon)) { _fun00012_ip = 156; continue _fun00011 }
 56:
                    tangon = _closure2_slot9;
                    option = tangon.timestampSec;
                    oscard = _closure2_slot5;
                    tangon = !oscard;
                    if(oscard) { _fun00012_ip = 87; continue _fun00011 }
 76:
                    oscard = 3;
                    oscard = golfie - oscard;
                    tangon = option < oscard;
 87:
                    if(!tangon) { _fun00012_ip = 117; continue _fun00011 }
 90:
                    tangon = _closure2_slot2;
                    golfie = tangon.current;
                    oscard = golfie.seek;
                    tangon = 1;
                    tangon = option - tangon;
                    tangon = oscard.bind(golfie)(tangon);
 117:
                    oscard = _closure2_slot11;
                    tangon = _closure1_slot17;
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
            variable43 = variable43.bind(limora)(config, quebec);
            quebec = limora.useCallback;
            config = new Array(4);
            config[0] = equals;
            config[1] = variable40;
            config[2] = echoed;
            config[3] = whisks;
            echoed = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    michal = arguments[0];
                    entity = undefined;
                    if(!(michal === entity)) { _fun00014_ip = 11; continue _fun00013 }
 9:
                    michal = {};
 11:
                    tangon = michal.shouldRestartVideo;
                    if(!(tangon === entity)) { _fun00014_ip = 23; continue _fun00013 }
 21:
                    tangon = true;
 23:
                    oscard = _closure2_slot10;
                    report = _closure1_slot17;
                    report = report.ERRORED;
                    if(!(oscard !== report)) { _fun00014_ip = 172; continue _fun00013 }
 50:
                    report = _closure2_slot14;
                    if(!report) { _fun00014_ip = 60; continue _fun00013 }
 57:
                    if(tangon) { _fun00014_ip = 172; continue _fun00013 }
 60:
                    report = _closure2_slot10;
                    tangon = _closure1_slot17;
                    tangon = tangon.PAUSED;
                    if(!(report !== tangon)) { _fun00014_ip = 143; continue _fun00013 }
 78:
                    report = _closure2_slot10;
                    tangon = _closure1_slot17;
                    tangon = tangon.LOADING;
                    if(!(report !== tangon)) { _fun00014_ip = 143; continue _fun00013 }
 96:
                    report = _closure2_slot10;
                    tangon = _closure1_slot17;
                    tangon = tangon.PLAYING;
                    if(!(report === tangon)) { _fun00014_ip = 227; continue _fun00013 }
 114:
                    report = _closure2_slot11;
                    tangon = _closure1_slot17;
                    tangon = tangon.PAUSED;
                    tangon = report.bind(entity)(tangon);
                    tangon = _closure2_slot22;
                    tangon = tangon.bind(entity)();
                    _fun00014_ip = 227; continue _fun00013;
 143:
                    report = _closure2_slot11;
                    tangon = _closure1_slot17;
                    tangon = tangon.PLAYING;
                    tangon = report.bind(entity)(tangon);
                    tangon = _closure2_slot25;
                    tangon = tangon.bind(entity)();
                    _fun00014_ip = 227; continue _fun00013;
 172:
                    tangon = _closure2_slot2;
                    oscard = tangon.current;
                    tangon = null;
                    if(!(tangon != oscard)) { _fun00014_ip = 200; continue _fun00013 }
 187:
                    report = oscard.seek;
                    tangon = 0;
                    tangon = report.bind(oscard)(tangon);
 200:
                    tangon = _closure2_slot11;
                    zuuluu = _closure1_slot17;
                    zuuluu = zuuluu.PLAYING;
                    zuuluu = tangon.bind(entity)(zuuluu);
                    michal = _closure2_slot25;
                    michal = michal.bind(entity)();
 227:
                    return entity;
                }
            };
            variable40 = quebec.bind(limora)(echoed, config);
            _closure2_slot28 = variable40;
            quebec = limora.useCallback;
            config = new Array(1);
            config[0] = variable40;
            echoed = function() {
                michal = _closure2_slot28;
                entity = undefined;
                entity = michal.bind(entity)();
                return entity;
            };
            quebec = quebec.bind(limora)(echoed, config);
            variable50 = limora.useCallback;
            config = function() {
                entity = undefined;
                return entity;
            };
            echoed = new Array(0);
            config = variable50.bind(limora)(config, echoed);
            echoed = limora.useContext;
            verify = verify[variable49];
            verify = sierra.bind(report)(verify);
            verify = echoed.bind(limora)(verify);
            verify = verify.isModalPanGestureActive;
            _closure2_slot29 = verify;
            sierra = limora.useCallback;
            echoed = new Array(3);
            echoed[0] = variable42;
            echoed[1] = variable40;
            echoed[2] = verify;
            verify = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    michal = _closure2_slot29;
                    michal = michal.current;
                    if(michal) { _fun00016_ip = 67; continue _fun00015 }
 15:
                    zuuluu = _closure2_slot15;
                    michal = zuuluu.get;
                    michal = michal.bind(zuuluu)();
                    if(!michal) { _fun00016_ip = 47; continue _fun00015 }
 31:
                    tangon = _closure2_slot15;
                    zuuluu = tangon.set;
                    michal = false;
                    michal = zuuluu.bind(tangon)(michal);
 47:
                    zuuluu = _closure2_slot28;
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
            verify = sierra.bind(limora)(verify, echoed);
            romeon = romeon.ERRORED;
            limora = equals === romeon;
            if(limora) { _fun00004_ip = 1552; continue _fun00003 }
 1519:
            variable40 = _closure1_slot15;
            variable55 = source.timestampSec;
            variable54 = source.maxTimestampSec;
            variable53 = source.duration;
            variable56 = undefined;
            variable52 = variable41;
            romeon = variable56[variable40](variable55, variable54, variable53, variable52, variable51);
            limora = !romeon;
 1552:
            _closure2_slot30 = limora;
            romeon = _closure1_slot4;
            variable40 = romeon.useCallback;
            sierra = new Array(5);
            sierra[0] = papara;
            sierra[1] = variable46;
            echoed = source.maxTimestampSec;
            sierra[2] = echoed;
            sierra[3] = record;
            sierra[4] = limora;
            echoed = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    michal = _closure2_slot2;
                    zuuluu = michal.current;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00018_ip = 112; continue _fun00017 }
 18:
                    zuuluu = _closure2_slot16;
                    michal = zuuluu.get;
                    zuuluu = michal.bind(zuuluu)();
                    michal = _closure2_slot6;
                    zuuluu = zuuluu * michal;
                    michal = _closure2_slot30;
                    if(michal) { _fun00018_ip = 112; continue _fun00017 }
 46:
                    michal = global;
                    report = michal.Math;
                    tangon = report.min;
                    michal = 10;
                    zuuluu = zuuluu + michal;
                    michal = _closure2_slot9;
                    michal = michal.maxTimestampSec;
                    tangon = tangon.bind(report)(zuuluu, michal);
                    michal = _closure2_slot2;
                    zuuluu = michal.current;
                    michal = zuuluu.seek;
                    michal = michal.bind(zuuluu)(tangon);
                    michal = _closure2_slot26;
                    entity = undefined;
                    entity = michal.bind(entity)();
 112:
                    entity = undefined;
                    return entity;
                }
            };
            echoed = variable40.bind(romeon)(echoed, sierra);
            variable41 = romeon.useCallback;
            variable40 = new Array(3);
            variable40[0] = papara;
            variable40[1] = variable46;
            variable40[2] = record;
            sierra = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    michal = _closure2_slot2;
                    zuuluu = michal.current;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00020_ip = 69; continue _fun00019 }
 18:
                    zuuluu = _closure2_slot6;
                    michal = 0;
                    if(!(zuuluu > michal)) { _fun00020_ip = 59; continue _fun00019 }
 28:
                    tangon = _closure2_slot16;
                    zuuluu = tangon.set;
                    michal = argFoo;
                    report = michal.currentTime;
                    michal = _closure2_slot6;
                    michal = report / michal;
                    michal = zuuluu.bind(tangon)(michal);
 59:
                    michal = _closure2_slot26;
                    entity = undefined;
                    entity = michal.bind(entity)();
 69:
                    entity = undefined;
                    return entity;
                }
            };
            variable42 = variable41.bind(romeon)(sierra, variable40);
            variable40 = romeon.useCallback;
            sierra = new Array(4);
            sierra[0] = papara;
            sierra[1] = variable46;
            sierra[2] = record;
            sierra[3] = equals;
            record = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    entity = _closure2_slot2;
                    zuuluu = entity.current;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00022_ip = 209; continue _fun00021 }
 21:
                    zuuluu = _closure2_slot16;
                    entity = zuuluu.get;
                    zuuluu = entity.bind(zuuluu)();
                    entity = _closure2_slot6;
                    yankee = zuuluu * entity;
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 20;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    report = report.bind(zuuluu)(tangon);
                    tangon = report.isAndroid;
                    tangon = tangon.bind(report)();
                    if(!tangon) { _fun00022_ip = 99; continue _fun00021 }
 79:
                    tangon = _closure2_slot2;
                    report = tangon.current;
                    tangon = report.seek;
                    tangon = tangon.bind(report)(yankee);
 99:
                    tangon = _closure2_slot2;
                    oscard = tangon.current;
                    report = oscard.seek;
                    tangon = global;
                    verify = tangon.Math;
                    option = verify.max;
                    offset = tangon.Math;
                    golfie = offset.floor;
                    tangon = 10;
                    tangon = yankee - tangon;
                    golfie = golfie.bind(offset)(tangon);
                    tangon = 0;
                    tangon = option.bind(verify)(tangon, golfie);
                    tangon = report.bind(oscard)(tangon);
                    tangon = _closure2_slot26;
                    tangon = tangon.bind(zuuluu)();
                    report = _closure2_slot10;
                    tangon = _closure1_slot17;
                    tangon = tangon.ENDED;
                    if(!(report === tangon)) { _fun00022_ip = 209; continue _fun00021 }
 190:
                    michal = _closure2_slot11;
                    entity = _closure1_slot17;
                    entity = entity.PLAYING;
                    entity = michal.bind(zuuluu)(entity);
 209:
                    entity = undefined;
                    return entity;
                }
            };
            record = variable40.bind(romeon)(record, sierra);
            record = cntext.bind(report)(record);
            cntext = cntext.bind(report)(echoed);
            echoed = romeon.useRef;
            variable41 = echoed.bind(romeon)(ctrled);
            _closure2_slot31 = variable41;
            echoed = romeon.useRef;
            variable40 = echoed.bind(romeon)(ctrled);
            _closure2_slot32 = variable40;
            sierra = romeon.useCallback;
            echoed = new Array(7);
            echoed[0] = variable46;
            echoed[1] = vacuum;
            echoed[2] = variable41;
            echoed[3] = variable40;
            variable38 = variable38.taskType;
            echoed[4] = variable38;
            echoed[5] = variable37;
            echoed[6] = foxtra;
            foxtra = function(argFoo) {
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
                    zuuluu = _closure2_slot31;
                    zuuluu = zuuluu.current;
                    if(!(report >= zuuluu)) { _fun00024_ip = 178; continue _fun00023 }
 56:
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    zuuluu = 21;
                    zuuluu = oscard[zuuluu];
                    golfie = undefined;
                    option = report.bind(golfie)(zuuluu);
                    oscard = option.sendVideoProgress;
                    report = _closure2_slot3;
                    zuuluu = entity.currentTime;
                    zuuluu = oscard.bind(option)(report, zuuluu);
                    oscard = _closure2_slot23;
                    report = entity.seekableDuration;
                    zuuluu = entity.currentTime;
                    zuuluu = oscard.bind(golfie)(tangon, report, zuuluu);
                    report = _closure2_slot31;
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
                    zuuluu = _closure2_slot32;
                    zuuluu = zuuluu.current;
                    if(!(report >= zuuluu)) { _fun00024_ip = 283; continue _fun00023 }
 197:
                    oscard = _closure1_slot0;
                    report = _closure1_slot2;
                    zuuluu = 22;
                    report = report[zuuluu];
                    zuuluu = undefined;
                    option = oscard.bind(zuuluu)(report);
                    golfie = option.updateOptimisticProgress;
                    zuuluu = _closure2_slot3;
                    oscard = zuuluu.id;
                    zuuluu = _closure2_slot4;
                    report = zuuluu.taskType;
                    zuuluu = entity.currentTime;
                    zuuluu = golfie.bind(option)(oscard, report, zuuluu);
                    report = _closure2_slot32;
                    oscard = entity.currentTime;
                    zuuluu = 1;
                    zuuluu = oscard + zuuluu;
                    report['current'] = zuuluu;
 283:
                    golfie = _closure2_slot8;
                    zuuluu = _closure2_slot3;
                    oscard = zuuluu.id;
                    report = entity.currentTime;
                    zuuluu = entity.seekableDuration;
                    entity = undefined;
                    zuuluu = golfie.bind(entity)(oscard, report, zuuluu);
                    zuuluu = _closure2_slot16;
                    michal = zuuluu.set;
                    michal = michal.bind(zuuluu)(tangon);
                    return entity;
                }
            };
            variable41 = sierra.bind(romeon)(foxtra, echoed);
            echoed = romeon.useCallback;
            foxtra = new Array(3);
            foxtra[0] = papara;
            foxtra[1] = vacuum;
            foxtra[2] = option;
            option = function() {
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 21;
                zuuluu = zuuluu[entity];
                entity = undefined;
                golfie = tangon.bind(entity)(zuuluu);
                oscard = golfie.sendVideoProgress;
                report = _closure2_slot3;
                tangon = _closure2_slot6;
                tangon = oscard.bind(golfie)(report, tangon);
                tangon = _closure2_slot18;
                tangon = tangon.bind(entity)();
                zuuluu = _closure2_slot11;
                michal = _closure1_slot17;
                michal = michal.ENDED;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            variable38 = echoed.bind(romeon)(option, foxtra);
            foxtra = romeon.useCallback;
            option = new Array(1);
            option[0] = oscard;
            oscard = function() {
                tangon = _closure2_slot11;
                entity = _closure1_slot17;
                zuuluu = entity.LOADING;
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                michal = _closure2_slot21;
                michal = michal.bind(entity)();
                return entity;
            };
            variable40 = foxtra.bind(romeon)(oscard, option);
            option = romeon.useCallback;
            oscard = new Array(1);
            oscard[0] = tangon;
            tangon = function(argFoo) {
                tangon = _closure2_slot11;
                entity = _closure1_slot17;
                zuuluu = entity.ERRORED;
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                zuuluu = _closure2_slot19;
                michal = argFoo;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            variable37 = option.bind(romeon)(tangon, oscard);
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            tangon = 23;
            tangon = option[tangon];
            option = oscard.bind(report)(tangon);
            oscard = option.useStateFromStores;
            romeon = _closure1_slot8;
            tangon = new Array(1);
            tangon[0] = romeon;
            zuuluu = function() {
                michal = _closure1_slot8;
                entity = michal.getState;
                entity = entity.bind(michal)();
                return entity;
            };
            tangon = oscard.bind(option)(tangon, zuuluu);
            zuuluu = _closure1_slot10;
            zuuluu = zuuluu.ACTIVE;
            zuuluu = tangon === zuuluu;
            if(!(entity != variable47)) { _fun00004_ip = 3820; continue _fun00003 }
 1931:
            sierra = !zuuluu;
            if(!zuuluu) { _fun00004_ip = 1951; continue _fun00003 }
 1937:
            zuuluu = _closure1_slot17;
            zuuluu = zuuluu.PAUSED;
            sierra = equals === zuuluu;
 1951:
            if(sierra) { _fun00004_ip = 1968; continue _fun00003 }
 1954:
            zuuluu = _closure1_slot17;
            zuuluu = zuuluu.LOADING;
            sierra = equals === zuuluu;
 1968:
            if(sierra) { _fun00004_ip = 1974; continue _fun00003 }
 1971:
            sierra = michal;
 1974:
            tangon = _closure1_slot11;
            zuuluu = _closure1_slot5;
            michal = {};
            option = sizing.container;
            oscard = new Array(2);
            oscard[0] = option;
            oscard[1] = golfie;
            michal['style'] = oscard;
            michal['accessible'] = offset;
            option = _closure1_slot12;
            golfie = _closure1_slot6;
            oscard = {};
            romeon = sizing.videoContainer;
            oscard['style'] = romeon;
            oscard['onPress'] = verify;
            echoed = _closure1_slot0;
            verify = _closure1_slot2;
            papara = 24;
            romeon = verify[papara];
            romeon = echoed.bind(report)(romeon);
            foxtra = romeon.intl;
            romeon = foxtra.string;
            verify = verify[papara];
            verify = echoed.bind(report)(verify);
            verify = verify.t;
            verify = verify.FlNoSU;
            verify = romeon.bind(foxtra)(verify);
            oscard['accessibilityLabel'] = verify;
            verify = _closure1_slot17;
            verify = verify.ERRORED;
            romeon = equals !== verify;
            if(!romeon) { _fun00004_ip = 2260; continue _fun00003 }
 2113:
            echoed = _closure1_slot11;
            foxtra = _closure1_slot1;
            variable46 = _closure1_slot2;
            verify = 25;
            verify = variable46[verify];
            foxtra = foxtra.bind(report)(verify);
            verify = {'mixWithOthers': 'mix', 'ref': null, 'accessible': false, 'importantForAccessibility': 'no-hide-descendants', 'accessibilityRole': 'none'};
            verify['ref'] = variable45;
            variable45 = sizing.video;
            verify['style'] = variable45;
            verify['paused'] = sierra;
            variable45 = {};
            variable49 = entity == variable48;
            variable46 = undefined;
            if(variable49) { _fun00004_ip = 2188; continue _fun00003 }
 2183:
            variable46 = variable48.url;
 2188:
            if(!(entity == variable46)) { _fun00004_ip = 2197; continue _fun00003 }
 2192:
            variable46 = variable47.url;
 2197:
            variable45['uri'] = variable46;
            verify['source'] = variable45;
            verify['onBuffer'] = variable44;
            verify['onLoad'] = variable43;
            verify['onSeek'] = variable42;
            verify['onProgress'] = variable41;
            verify['onLoadStart'] = variable40;
            verify['onEnd'] = variable38;
            verify['onError'] = variable37;
            verify['onReadyForDisplay'] = target;
            target = 'contain';
            verify['resizeMode'] = target;
            romeon = echoed.bind(report)(foxtra, verify);
 2260:
            verify = new Array(5);
            verify[0] = romeon;
            echoed = _closure1_slot11;
            foxtra = _closure1_slot0;
            target = _closure1_slot2;
            romeon = 26;
            romeon = target[romeon];
            romeon = foxtra.bind(report)(romeon);
            foxtra = romeon.VideoQuestCaptions;
            romeon = {};
            romeon['quest'] = vacuum;
            source = source.timestampSec;
            romeon['currentTime'] = source;
            romeon['visible'] = variable39;
            source = {};
            vacuum = entity == sequen;
            target = undefined;
            if(vacuum) { _fun00004_ip = 2337; continue _fun00003 }
 2332:
            target = sequen.top;
 2337:
            variable37 = entity != target;
            vacuum = 0;
            if(!variable37) { _fun00004_ip = 2349; continue _fun00003 }
 2346:
            vacuum = target;
 2349:
            source['top'] = vacuum;
            vacuum = entity == sequen;
            target = undefined;
            if(vacuum) { _fun00004_ip = 2367; continue _fun00003 }
 2362:
            target = sequen.bottom;
 2367:
            variable37 = entity != target;
            vacuum = 0;
            if(!variable37) { _fun00004_ip = 2379; continue _fun00003 }
 2376:
            vacuum = target;
 2379:
            source['bottom'] = vacuum;
            vacuum = entity == sequen;
            target = undefined;
            if(vacuum) { _fun00004_ip = 2397; continue _fun00003 }
 2392:
            target = sequen.left;
 2397:
            variable37 = entity != target;
            vacuum = 0;
            if(!variable37) { _fun00004_ip = 2409; continue _fun00003 }
 2406:
            vacuum = target;
 2409:
            source['left'] = vacuum;
            target = entity == sequen;
            vacuum = undefined;
            if(target) { _fun00004_ip = 2427; continue _fun00003 }
 2422:
            vacuum = sequen.right;
 2427:
            sequen = entity != vacuum;
            ctrled = 0;
            if(!sequen) { _fun00004_ip = 2439; continue _fun00003 }
 2436:
            ctrled = vacuum;
 2439:
            source['right'] = ctrled;
            romeon['style'] = source;
            romeon = echoed.bind(report)(foxtra, romeon);
            verify[1] = romeon;
            yankee = !yankee;
            if(!yankee) { _fun00004_ip = 2512; continue _fun00003 }
 2463:
            echoed = _closure1_slot11;
            foxtra = _closure1_slot5;
            romeon = {};
            source = sizing.loadingContainer;
            romeon['style'] = source;
            ctrled = _closure1_slot7;
            source = {};
            vacuum = true;
            source['animating'] = vacuum;
            source = echoed.bind(report)(ctrled, source);
            romeon['children'] = source;
            yankee = echoed.bind(report)(foxtra, romeon);
 2512:
            verify[2] = yankee;
            foxtra = _closure1_slot12;
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
            if(!offset) { _fun00004_ip = 2924; continue _fun00003 }
 2588:
            source = _closure1_slot12;
            update = _closure1_slot5;
            kiloes = {};
            ctrled = sizing.controlsTopBottom;
            kiloes['style'] = ctrled;
            target = _closure1_slot11;
            variable37 = _closure1_slot0;
            variable40 = _closure1_slot2;
            vacuum = 27;
            ctrled = variable40[vacuum];
            ctrled = variable37.bind(report)(ctrled);
            sequen = ctrled.PressableOpacity;
            ctrled = {};
            variable38 = 'button';
            ctrled['accessibilityRole'] = variable38;
            variable41 = variable40[papara];
            variable41 = variable37.bind(report)(variable41);
            variable43 = variable41.intl;
            variable42 = variable43.string;
            variable41 = variable40[papara];
            variable41 = variable37.bind(report)(variable41);
            variable41 = variable41.t;
            variable41 = variable41.bDSZOz;
            variable41 = variable42.bind(variable43)(variable41);
            ctrled['accessibilityLabel'] = variable41;
            ctrled['onPress'] = variable36;
            variable36 = 28;
            variable36 = variable40[variable36];
            variable36 = variable37.bind(report)(variable36);
            variable37 = variable36.ClosedCaptionsOutlineIcon;
            variable36 = {};
            if(variable39) { _fun00004_ip = 2736; continue _fun00003 }
 2723:
            variable39 = sizing.iconDisabled;
            variable39 = variable39.color;
            _fun00004_ip = 2746; continue _fun00003;
 2736:
            variable40 = sizing.icon;
            variable39 = variable40.color;
 2746:
            variable36['color'] = variable39;
            variable36 = target.bind(report)(variable37, variable36);
            ctrled['children'] = variable36;
            sequen = target.bind(report)(sequen, ctrled);
            ctrled = new Array(2);
            ctrled[0] = sequen;
            target = _closure1_slot11;
            variable36 = _closure1_slot0;
            variable37 = _closure1_slot2;
            vacuum = variable37[vacuum];
            vacuum = variable36.bind(report)(vacuum);
            sequen = vacuum.PressableOpacity;
            vacuum = {};
            vacuum['accessibilityRole'] = variable38;
            variable38 = variable37[papara];
            variable38 = variable36.bind(report)(variable38);
            variable40 = variable38.intl;
            variable39 = variable40.string;
            variable38 = variable37[papara];
            variable38 = variable36.bind(report)(variable38);
            variable38 = variable38.t;
            variable38 = variable38.KCzjTk;
            variable38 = variable39.bind(variable40)(variable38);
            vacuum['accessibilityLabel'] = variable38;
            vacuum['onPress'] = status;
            status = 29;
            status = variable37[status];
            status = variable36.bind(report)(status);
            variable36 = status.TranscriptOutlineIcon;
            status = {};
            variable37 = sizing.iconDisabled;
            variable37 = variable37.color;
            status['color'] = variable37;
            status = target.bind(report)(variable36, status);
            vacuum['children'] = status;
            vacuum = target.bind(report)(sequen, vacuum);
            ctrled[1] = vacuum;
            kiloes['children'] = ctrled;
            echoed = source.bind(report)(update, kiloes);
 2924:
            kiloes = new Array(3);
            kiloes[0] = echoed;
            source = _closure1_slot12;
            update = _closure1_slot5;
            echoed = {};
            ctrled = sizing.controlsMiddle;
            echoed['style'] = ctrled;
            status = _closure1_slot11;
            variable39 = _closure1_slot0;
            variable36 = _closure1_slot2;
            vacuum = 30;
            ctrled = variable36[vacuum];
            ctrled = variable39.bind(report)(ctrled);
            sequen = ctrled.VideoQuestPlayerControlButton;
            ctrled = {};
            target = _closure1_slot17;
            target = target.ERRORED;
            target = equals === target;
            ctrled['disabled'] = target;
            target = 'button';
            ctrled['accessibilityRole'] = target;
            variable37 = variable36[papara];
            variable37 = variable39.bind(report)(variable37);
            variable40 = variable37.intl;
            variable38 = variable40.string;
            variable37 = variable36[papara];
            variable37 = variable39.bind(report)(variable37);
            variable37 = variable37.t;
            variable37 = variable37.r9s3Ul;
            variable37 = variable38.bind(variable40)(variable37);
            ctrled['accessibilityLabel'] = variable37;
            ctrled['onPress'] = record;
            record = 31;
            record = variable36[record];
            record = variable39.bind(report)(record);
            variable37 = record.SkipBackwardIcon;
            record = {'color': null, 'width': 16, 'height': 16};
            variable38 = sizing.icon;
            variable38 = variable38.color;
            record['color'] = variable38;
            record = status.bind(report)(variable37, record);
            ctrled['children'] = record;
            sequen = status.bind(report)(sequen, ctrled);
            ctrled = new Array(3);
            ctrled[0] = sequen;
            sequen = variable36[vacuum];
            sequen = variable39.bind(report)(sequen);
            record = sequen.VideoQuestPlayerControlButton;
            sequen = {};
            sequen['accessibilityRole'] = target;
            variable37 = variable36[papara];
            variable37 = variable39.bind(report)(variable37);
            variable38 = variable37.intl;
            variable37 = variable38.string;
            variable36 = variable36[papara];
            variable36 = variable39.bind(report)(variable36);
            variable36 = variable36.t;
            variable36 = variable36.RscU7O;
            variable36 = variable37.bind(variable38)(variable36);
            sequen['accessibilityLabel'] = variable36;
            sequen['onPress'] = quebec;
            if(whisks) { _fun00004_ip = 3297; continue _fun00003 }
 3212:
            whisks = _closure1_slot17;
            whisks = whisks.ERRORED;
            if(!(equals !== whisks)) { _fun00004_ip = 3297; continue _fun00003 }
 3226:
            equals = _closure1_slot11;
            quebec = _closure1_slot0;
            variable36 = _closure1_slot2;
            if(sierra) { _fun00004_ip = 3261; continue _fun00003 }
 3241:
            sierra = 34;
            sierra = variable36[sierra];
            sierra = quebec.bind(report)(sierra);
            whisks = sierra.PauseIcon;
            _fun00004_ip = 3279; continue _fun00003;
 3261:
            sierra = 33;
            sierra = variable36[sierra];
            sierra = quebec.bind(report)(sierra);
            whisks = sierra.PlayIcon;
 3279:
            sierra = {};
            quebec = 'lg';
            sierra['size'] = quebec;
            sierra = equals.bind(report)(whisks, sierra);
            _fun00004_ip = 3343; continue _fun00003;
 3297:
            quebec = _closure1_slot11;
            equals = _closure1_slot0;
            variable36 = _closure1_slot2;
            whisks = 32;
            whisks = variable36[whisks];
            whisks = equals.bind(report)(whisks);
            equals = whisks.RetryIcon;
            whisks = {};
            variable36 = 'lg';
            whisks['size'] = variable36;
            sierra = quebec.bind(report)(equals, whisks);
 3343:
            sequen['children'] = sierra;
            sequen = status.bind(report)(record, sequen);
            ctrled[1] = sequen;
            record = _closure1_slot11;
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
            cntext = 35;
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
            if(!offset) { _fun00004_ip = 3691; continue _fun00003 }
 3539:
            ctrled = _closure1_slot11;
            source = _closure1_slot5;
            update = {};
            vacuum = sizing.controlsTopBottom;
            update['style'] = vacuum;
            record = _closure1_slot0;
            cntext = _closure1_slot2;
            vacuum = 27;
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
            config = 36;
            config = cntext[config];
            config = record.bind(report)(config);
            record = config.FullscreenEnterIcon;
            config = {};
            config = ctrled.bind(report)(record, config);
            vacuum['children'] = config;
            vacuum = ctrled.bind(report)(sequen, vacuum);
            update['children'] = vacuum;
            echoed = ctrled.bind(report)(source, update);
 3691:
            kiloes[2] = echoed;
            yankee['children'] = kiloes;
            yankee = foxtra.bind(report)(romeon, yankee);
            verify[3] = yankee;
            if(!offset) { _fun00004_ip = 3794; continue _fun00003 }
 3712:
            foxtra = _closure1_slot11;
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
 3794:
            verify[4] = offset;
            oscard['children'] = verify;
            oscard = option.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 3820:
            return entity;
        }
    };
    zuuluu['VideoQuestPlayer'] = michal;
    return entity;
})();