// app/modules/search_v2/native/components/list/rows/SearchHistoryRow.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: SearchHistoryRemoveIcon
        michal = argFoo;
        golfie = michal.searchContext;
        var _closure2_slot0 = golfie;
        oscard = michal.searchHistoryItem;
        var _closure2_slot1 = oscard;
        tangon = _closure1_slot4;
        zuuluu = tangon.useCallback;
        michal = new Array(2);
        michal[0] = golfie;
        michal[1] = oscard;
        entity = function() {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 10;
            michal = michal[entity];
            entity = undefined;
            report = zuuluu.bind(entity)(michal);
            tangon = report.removeSearchHistoryItem;
            zuuluu = _closure2_slot0;
            michal = _closure2_slot1;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        golfie = zuuluu.bind(tangon)(entity, michal);
        tangon = _closure1_slot10;
        oscard = _closure1_slot0;
        option = _closure1_slot2;
        entity = 11;
        entity = option[entity];
        zuuluu = undefined;
        entity = oscard.bind(zuuluu)(entity);
        michal = entity.PressableHighlight;
        entity = {'onPress': null, 'accessibilityRole': 'button', 'unstable_pressDelay': 130};
        entity['onPress'] = golfie;
        golfie = {};
        verify = 16;
        golfie['marginLeft'] = verify;
        entity['style'] = golfie;
        golfie = {'bottom': 16, 'left': 16, 'right': 16, 'top': 16};
        entity['hitSlop'] = golfie;
        golfie = _closure1_slot10;
        report = 12;
        report = option[report];
        report = oscard.bind(zuuluu)(report);
        oscard = report.XSmallIcon;
        report = {'size': 'sm', 'color': 'interactive-normal'};
        report = golfie.bind(zuuluu)(oscard, report);
        entity['children'] = report;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: SearchHistoryTextRow
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            foxtra = entity.searchContext;
            var _closure2_slot0 = foxtra;
            romeon = entity.searchHistoryItem;
            var _closure2_slot1 = romeon;
            entity = _closure1_slot12;
            tangon = undefined;
            offset = entity.bind(tangon)();
            var _closure2_slot2 = offset;
            michal = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 13;
            entity = oscard[entity];
            report = michal.bind(tangon)(entity);
            zuuluu = report.useOnPressSearchHistoryText;
            entity = {};
            entity['searchContext'] = foxtra;
            entity = zuuluu.bind(report)(entity);
            var _closure2_slot3 = entity;
            golfie = _closure1_slot4;
            report = golfie.useCallback;
            zuuluu = new Array(5);
            zuuluu[0] = entity;
            zuuluu[1] = foxtra;
            entity = romeon.tags;
            zuuluu[2] = entity;
            entity = romeon.text;
            zuuluu[3] = entity;
            entity = romeon.type;
            zuuluu[4] = entity;
            entity = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 14;
                michal = michal[entity];
                entity = undefined;
                oscard = zuuluu.bind(entity)(michal);
                report = oscard.trackSearchHistoryClicked;
                tangon = {};
                michal = _closure2_slot0;
                tangon['searchContext'] = michal;
                michal = _closure2_slot1;
                golfie = michal.type;
                tangon['searchHistoryItemType'] = golfie;
                tangon = report.bind(oscard)(tangon);
                tangon = _closure2_slot3;
                zuuluu = michal.text;
                michal = michal.tags;
                michal = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            report = report.bind(golfie)(entity, zuuluu);
            zuuluu = _closure1_slot10;
            entity = 15;
            entity = oscard[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.SearchListRow;
            entity = {};
            backup = _closure1_slot11;
            golfie = _closure1_slot5;
            oscard = {};
            verify = offset.textContainer;
            oscard['style'] = verify;
            sizing = romeon.tags;
            verify = null;
            kiloes = verify == sizing;
            verify = undefined;
            if(kiloes) { _fun00002_ip = 224; continue _fun00001 }
 207:
            kiloes = sizing.map;
            yankee = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot10;
                tangon = _closure1_slot5;
                zuuluu = {};
                oscard = 'button';
                zuuluu['accessibilityRole'] = oscard;
                oscard = _closure2_slot2;
                oscard = oscard.tag;
                zuuluu['style'] = oscard;
                option = _closure1_slot10;
                golfie = _closure1_slot0;
                oscard = _closure1_slot2;
                michal = 16;
                oscard = oscard[michal];
                michal = undefined;
                oscard = golfie.bind(michal)(oscard);
                golfie = oscard.Text;
                oscard = {'lineClamp': 1, 'variant': 'text-sm/semibold', 'color': 'header-primary'};
                verify = entity.text;
                oscard['children'] = verify;
                oscard = option.bind(michal)(golfie, oscard);
                zuuluu['children'] = oscard;
                entity = entity.text;
                entity = report.bind(michal)(tangon, zuuluu, entity);
                return entity;
            };
            verify = kiloes.bind(sizing)(yankee);
 224:
            kiloes = new Array(2);
            kiloes[0] = verify;
            result = _closure1_slot10;
            verify = _closure1_slot0;
            yankee = _closure1_slot2;
            sizing = 16;
            sizing = yankee[sizing];
            sizing = verify.bind(tangon)(sizing);
            output = sizing.Text;
            sizing = {'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'header-primary'};
            echoed = offset.text;
            sizing['style'] = echoed;
            echoed = romeon.text;
            sizing['children'] = echoed;
            sizing = result.bind(tangon)(output, sizing);
            kiloes[1] = sizing;
            oscard['children'] = kiloes;
            oscard = backup.bind(tangon)(golfie, oscard);
            entity['label'] = oscard;
            entity['onPress'] = report;
            golfie = _closure1_slot10;
            oscard = _closure1_slot14;
            report = {};
            report['searchContext'] = foxtra;
            report['searchHistoryItem'] = romeon;
            report = golfie.bind(tangon)(oscard, report);
            entity['trailing'] = report;
            report = offset.textIconContainer;
            entity['iconContainerStyle'] = report;
            golfie = _closure1_slot10;
            oscard = _closure1_slot5;
            report = {};
            offset = offset.iconContainer;
            report['style'] = offset;
            offset = _closure1_slot10;
            option = 17;
            option = yankee[option];
            option = verify.bind(tangon)(option);
            verify = option.MagnifyingGlassIcon;
            option = {'size': 'sm', 'color': 'interactive-normal'};
            option = offset.bind(tangon)(verify, option);
            report['children'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['icon'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: SearchHistoryGroupDMRow
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            tangon = michal.searchContext;
            var _closure2_slot0 = tangon;
            zuuluu = michal.searchHistoryItem;
            var _closure2_slot1 = zuuluu;
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            report = 18;
            oscard = option[report];
            report = undefined;
            yankee = golfie.bind(report)(oscard);
            offset = yankee.useStateFromStores;
            oscard = _closure1_slot6;
            verify = new Array(1);
            verify[0] = oscard;
            oscard = function() {
                zuuluu = _closure1_slot6;
                michal = zuuluu.getChannel;
                entity = _closure2_slot1;
                entity = entity.channelId;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            offset = offset.bind(yankee)(verify, oscard);
            var _closure2_slot2 = offset;
            romeon = _closure1_slot4;
            yankee = romeon.useEffect;
            verify = new Array(3);
            verify[0] = offset;
            verify[1] = tangon;
            verify[2] = zuuluu;
            oscard = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure2_slot2;
                    michal = null;
                    if(!(michal == zuuluu)) { _fun00006_ip = 58; continue _fun00005 }
 13:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 10;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.removeSearchHistoryItem;
                    michal = _closure2_slot0;
                    entity = _closure2_slot1;
                    entity = zuuluu.bind(tangon)(michal, entity);
 58:
                    entity = undefined;
                    return entity;
                }
            };
            oscard = yankee.bind(romeon)(oscard, verify);
            oscard = 13;
            oscard = option[oscard];
            option = golfie.bind(report)(oscard);
            golfie = option.useOnPressGroupDMItem;
            oscard = {};
            oscard['searchContext'] = tangon;
            verify = golfie.bind(option)(oscard);
            var _closure2_slot3 = verify;
            option = _closure1_slot4;
            golfie = option.useCallback;
            oscard = new Array(3);
            oscard[0] = verify;
            oscard[1] = tangon;
            verify = zuuluu.type;
            oscard[2] = verify;
            entity = function(argFoo) {
                zuuluu = argFoo;
                tangon = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 14;
                michal = michal[entity];
                entity = undefined;
                oscard = tangon.bind(entity)(michal);
                report = oscard.trackSearchHistoryClicked;
                tangon = {};
                golfie = _closure2_slot0;
                tangon['searchContext'] = golfie;
                tangon['channelId'] = zuuluu;
                golfie = _closure2_slot1;
                golfie = golfie.type;
                tangon['searchHistoryItemType'] = golfie;
                tangon = report.bind(oscard)(tangon);
                michal = _closure2_slot3;
                michal = michal.bind(entity)(zuuluu);
                return entity;
            };
            verify = golfie.bind(option)(entity, oscard);
            entity = _closure1_slot20;
            entity = entity.bind(report)(tangon, zuuluu);
            oscard = entity.trailing;
            option = entity.accessibilityActions;
            golfie = entity.onAccessibilityAction;
            entity = null;
            zuuluu = entity == offset;
            if(zuuluu) { _fun00004_ip = 291; continue _fun00003 }
 236:
            tangon = _closure1_slot10;
            zuuluu = _closure1_slot1;
            yankee = _closure1_slot2;
            michal = 19;
            michal = yankee[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            michal['channel'] = offset;
            michal['onPress'] = verify;
            michal['accessibilityActions'] = option;
            michal['onAccessibilityAction'] = golfie;
            michal['trailing'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 291:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: SearchHistoryDMRow
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            tangon = michal.searchContext;
            var _closure2_slot0 = tangon;
            zuuluu = michal.searchHistoryItem;
            var _closure2_slot1 = zuuluu;
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            report = 18;
            oscard = option[report];
            report = undefined;
            yankee = golfie.bind(report)(oscard);
            offset = yankee.useStateFromStores;
            oscard = _closure1_slot8;
            verify = new Array(1);
            verify[0] = oscard;
            oscard = function() {
                zuuluu = _closure1_slot8;
                michal = zuuluu.getUser;
                entity = _closure2_slot1;
                entity = entity.userId;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            offset = offset.bind(yankee)(verify, oscard);
            romeon = _closure1_slot4;
            yankee = romeon.useEffect;
            oscard = zuuluu.userId;
            verify = new Array(1);
            verify[0] = oscard;
            oscard = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 20;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.getUser;
                michal = _closure2_slot1;
                michal = michal.userId;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            oscard = yankee.bind(romeon)(oscard, verify);
            oscard = 13;
            oscard = option[oscard];
            option = golfie.bind(report)(oscard);
            golfie = option.useOnPressDMItem;
            oscard = {};
            oscard['searchContext'] = tangon;
            verify = golfie.bind(option)(oscard);
            var _closure2_slot2 = verify;
            option = _closure1_slot4;
            golfie = option.useCallback;
            entity = function() {
                tangon = _closure1_slot3;
                zuuluu = undefined;
                michal = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            StartGenerator();
                            report = argFoo;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(michal) { _fun00010_ip = 138; continue _fun00009 }
 13:
                            oscard = _closure1_slot1;
                            zuuluu = _closure1_slot2;
                            michal = 21;
                            michal = zuuluu[michal];
                            zuuluu = undefined;
                            oscard = oscard.bind(zuuluu)(michal);
                            michal = oscard.getOrEnsurePrivateChannel;
                            michal = michal.bind(oscard)(report);
                            SaveGenerator(address=53);
 51:
                            return michal;
 53:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(oscard) { _fun00010_ip = 135; continue _fun00009 }
 59:
                            oscard = _closure1_slot0;
                            golfie = _closure1_slot2;
                            tangon = 14;
                            tangon = golfie[tangon];
                            option = oscard.bind(zuuluu)(tangon);
                            golfie = option.trackSearchHistoryClicked;
                            oscard = {};
                            verify = _closure2_slot0;
                            oscard['searchContext'] = verify;
                            oscard['channelId'] = michal;
                            verify = _closure2_slot1;
                            verify = verify.type;
                            oscard['searchHistoryItemType'] = verify;
                            oscard = golfie.bind(option)(oscard);
                            tangon = _closure2_slot2;
                            tangon = tangon.bind(zuuluu)(report, michal);
                            return zuuluu;
 135:
                            return michal;
 138:
                            return entity;
                        }
                    };
                    return entity;
                };
                michal = tangon.bind(zuuluu)(michal);
                var _closure3_slot0 = michal;
                entity = function() {
                    entity = undefined;
                    tangon = _closure3_slot0;
                    zuuluu = tangon.apply;
                    entity = arguments;
                    michal = entity;
                    entity = this;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                return entity;
            };
            oscard = entity.bind(report)();
            entity = new Array(3);
            entity[0] = verify;
            entity[1] = tangon;
            verify = zuuluu.type;
            entity[2] = verify;
            verify = golfie.bind(option)(oscard, entity);
            entity = _closure1_slot20;
            entity = entity.bind(report)(tangon, zuuluu);
            oscard = entity.trailing;
            option = entity.accessibilityActions;
            golfie = entity.onAccessibilityAction;
            entity = null;
            zuuluu = entity == offset;
            if(zuuluu) { _fun00008_ip = 288; continue _fun00007 }
 233:
            tangon = _closure1_slot10;
            zuuluu = _closure1_slot1;
            yankee = _closure1_slot2;
            michal = 22;
            michal = yankee[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            michal['user'] = offset;
            michal['onPress'] = verify;
            michal['accessibilityActions'] = option;
            michal['onAccessibilityAction'] = golfie;
            michal['trailing'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 288:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: SearchHistoryGuildVoiceChannelRow
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = argFoo;
            yankee = michal.searchContext;
            var _closure2_slot0 = yankee;
            offset = michal.searchHistoryItem;
            var _closure2_slot1 = offset;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 18;
            michal = tangon[michal];
            report = undefined;
            verify = zuuluu.bind(report)(michal);
            option = verify.useStateFromStores;
            michal = _closure1_slot6;
            oscard = new Array(1);
            oscard[0] = michal;
            michal = function() {
                zuuluu = _closure1_slot6;
                michal = zuuluu.getChannel;
                entity = _closure2_slot1;
                entity = entity.channelId;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            option = option.bind(verify)(oscard, michal);
            var _closure2_slot2 = option;
            romeon = _closure1_slot4;
            verify = romeon.useEffect;
            oscard = new Array(3);
            oscard[0] = option;
            oscard[1] = yankee;
            oscard[2] = offset;
            michal = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = _closure2_slot2;
                    michal = null;
                    if(!(michal == zuuluu)) { _fun00014_ip = 58; continue _fun00013 }
 13:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 10;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.removeSearchHistoryItem;
                    michal = _closure2_slot0;
                    entity = _closure2_slot1;
                    entity = zuuluu.bind(tangon)(michal, entity);
 58:
                    entity = undefined;
                    return entity;
                }
            };
            michal = verify.bind(romeon)(michal, oscard);
            michal = 13;
            michal = tangon[michal];
            tangon = zuuluu.bind(report)(michal);
            zuuluu = tangon.useOnPressGuildVoiceChannel;
            michal = {};
            michal['searchContext'] = yankee;
            oscard = zuuluu.bind(tangon)(michal);
            var _closure2_slot3 = oscard;
            tangon = _closure1_slot4;
            zuuluu = tangon.useCallback;
            michal = new Array(3);
            michal[0] = oscard;
            michal[1] = yankee;
            oscard = offset.type;
            michal[2] = oscard;
            entity = function(argFoo) {
                zuuluu = argFoo;
                tangon = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 14;
                michal = michal[entity];
                entity = undefined;
                oscard = tangon.bind(entity)(michal);
                report = oscard.trackSearchHistoryClicked;
                tangon = {};
                golfie = _closure2_slot0;
                tangon['searchContext'] = golfie;
                tangon['channelId'] = zuuluu;
                golfie = _closure2_slot1;
                golfie = golfie.type;
                tangon['searchHistoryItemType'] = golfie;
                tangon = report.bind(oscard)(tangon);
                michal = _closure2_slot3;
                michal = michal.bind(entity)(zuuluu);
                return entity;
            };
            oscard = zuuluu.bind(tangon)(entity, michal);
            entity = null;
            michal = entity == option;
            if(michal) { _fun00012_ip = 297; continue _fun00011 }
 208:
            tangon = _closure1_slot10;
            zuuluu = _closure1_slot1;
            verify = _closure1_slot2;
            michal = 23;
            michal = verify[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            michal['channel'] = option;
            option = _closure1_slot13;
            michal['voiceStates'] = option;
            option = _closure1_slot13;
            michal['speakerVoiceStates'] = option;
            verify = _closure1_slot10;
            option = _closure1_slot14;
            golfie = {};
            golfie['searchContext'] = yankee;
            golfie['searchHistoryItem'] = offset;
            golfie = verify.bind(report)(option, golfie);
            michal['trailing'] = golfie;
            michal['onPress'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 297:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: SearchHistoryGuildTextChannelRow
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            michal = argFoo;
            tangon = michal.searchContext;
            var _closure2_slot0 = tangon;
            zuuluu = michal.searchHistoryItem;
            var _closure2_slot1 = zuuluu;
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            oscard = 18;
            verify = option[oscard];
            report = undefined;
            romeon = golfie.bind(report)(verify);
            yankee = romeon.useStateFromStores;
            verify = _closure1_slot6;
            offset = new Array(1);
            offset[0] = verify;
            verify = function() {
                zuuluu = _closure1_slot6;
                michal = zuuluu.getChannel;
                entity = _closure2_slot1;
                entity = entity.channelId;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            yankee = yankee.bind(romeon)(offset, verify);
            var _closure2_slot2 = yankee;
            foxtra = _closure1_slot4;
            romeon = foxtra.useEffect;
            offset = new Array(3);
            offset[0] = yankee;
            offset[1] = tangon;
            offset[2] = zuuluu;
            verify = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zuuluu = _closure2_slot2;
                    michal = null;
                    if(!(michal == zuuluu)) { _fun00018_ip = 58; continue _fun00017 }
 13:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 10;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.removeSearchHistoryItem;
                    michal = _closure2_slot0;
                    entity = _closure2_slot1;
                    entity = zuuluu.bind(tangon)(michal, entity);
 58:
                    entity = undefined;
                    return entity;
                }
            };
            verify = romeon.bind(foxtra)(verify, offset);
            oscard = option[oscard];
            romeon = golfie.bind(report)(oscard);
            offset = romeon.useStateFromStores;
            oscard = _closure1_slot7;
            verify = new Array(1);
            verify[0] = oscard;
            oscard = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    zuuluu = _closure1_slot7;
                    michal = zuuluu.lastMessageId;
                    entity = _closure2_slot1;
                    entity = entity.channelId;
                    michal = michal.bind(zuuluu)(entity);
                    entity = null;
                    if(!(entity == michal)) { _fun00020_ip = 62; continue _fun00019 }
 36:
                    zuuluu = _closure2_slot2;
                    report = entity == zuuluu;
                    zuuluu = undefined;
                    if(report) { _fun00020_ip = 59; continue _fun00019 }
 49:
                    tangon = _closure2_slot2;
                    zuuluu = tangon.lastMessageId;
 59:
                    michal = zuuluu;
 62:
                    zuuluu = entity != michal;
                    entity = null;
                    if(!zuuluu) { _fun00020_ip = 74; continue _fun00019 }
 71:
                    entity = michal;
 74:
                    return entity;
                }
            };
            offset = offset.bind(romeon)(verify, oscard);
            oscard = 13;
            oscard = option[oscard];
            option = golfie.bind(report)(oscard);
            golfie = option.useOnPressGuildTextChannel;
            oscard = {};
            oscard['searchContext'] = tangon;
            verify = golfie.bind(option)(oscard);
            var _closure2_slot3 = verify;
            option = _closure1_slot4;
            golfie = option.useCallback;
            oscard = new Array(3);
            oscard[0] = verify;
            oscard[1] = tangon;
            verify = zuuluu.type;
            oscard[2] = verify;
            entity = function(argFoo) {
                zuuluu = argFoo;
                tangon = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 14;
                michal = michal[entity];
                entity = undefined;
                oscard = tangon.bind(entity)(michal);
                report = oscard.trackSearchHistoryClicked;
                tangon = {};
                golfie = _closure2_slot0;
                tangon['searchContext'] = golfie;
                tangon['channelId'] = zuuluu;
                golfie = _closure2_slot1;
                golfie = golfie.type;
                tangon['searchHistoryItemType'] = golfie;
                tangon = report.bind(oscard)(tangon);
                michal = _closure2_slot3;
                michal = michal.bind(entity)(zuuluu);
                return entity;
            };
            verify = golfie.bind(option)(entity, oscard);
            entity = _closure1_slot20;
            entity = entity.bind(report)(tangon, zuuluu);
            oscard = entity.trailing;
            option = entity.accessibilityActions;
            golfie = entity.onAccessibilityAction;
            entity = null;
            zuuluu = entity == yankee;
            if(zuuluu) { _fun00016_ip = 335; continue _fun00015 }
 275:
            tangon = _closure1_slot10;
            zuuluu = _closure1_slot1;
            romeon = _closure1_slot2;
            michal = 24;
            michal = romeon[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            michal['channel'] = yankee;
            michal['lastMessageId'] = offset;
            michal['onPress'] = verify;
            michal['accessibilityActions'] = option;
            michal['onAccessibilityAction'] = golfie;
            michal['trailing'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 335:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo, argBar) { // Original name: useClearableSearchHistoryRowProps
        oscard = argFoo;
        michal = argBar;
        var _closure2_slot0 = oscard;
        var _closure2_slot1 = michal;
        entity = {};
        verify = _closure1_slot4;
        option = verify.useMemo;
        golfie = function() {
            michal = {};
            entity = 'remove';
            michal['name'] = entity;
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 25;
            zuuluu = golfie[entity];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            entity = golfie[entity];
            entity = oscard.bind(report)(entity);
            entity = entity.t;
            entity = entity.Ov3VOz;
            entity = zuuluu.bind(tangon)(entity);
            michal['label'] = entity;
            entity = new Array(1);
            entity[0] = michal;
            return entity;
        };
        report = new Array(0);
        report = option.bind(verify)(golfie, report);
        entity['accessibilityActions'] = report;
        option = _closure1_slot4;
        golfie = option.useCallback;
        report = new Array(2);
        report[0] = oscard;
        report[1] = michal;
        tangon = function(argFoo) {
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                entity = argFoo;
                entity = entity.nativeEvent;
                michal = entity.actionName;
                entity = 'remove';
                if(!(entity === michal)) { _fun00022_ip = 70; continue _fun00021 }
 22:
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 10;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.removeSearchHistoryItem;
                michal = _closure2_slot0;
                entity = _closure2_slot1;
                entity = zuuluu.bind(tangon)(michal, entity);
 70:
                entity = undefined;
                return entity;
            }
        };
        tangon = golfie.bind(option)(tangon, report);
        entity['onAccessibilityAction'] = tangon;
        report = _closure1_slot10;
        tangon = _closure1_slot14;
        zuuluu = {};
        zuuluu['searchContext'] = oscard;
        zuuluu['searchHistoryItem'] = michal;
        michal = undefined;
        michal = report.bind(michal)(tangon, zuuluu);
        entity['trailing'] = michal;
        return entity;
    };
    var _closure1_slot20 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    foxtra = 1;
    golfie = oscard[foxtra];
    tangon = argCor;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SearchHistoryItemTypes;
    var _closure1_slot9 = tangon;
    tangon = 7;
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.jsx;
    var _closure1_slot10 = option;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot11 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = {'height': 48, 'width': 48, 'borderRadius': null, 'backgroundColor': null, 'alignItems': 'center', 'justifyContent': 'center'};
    yankee = 9;
    backup = oscard[yankee];
    backup = romeon.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.xl;
    offset['borderRadius'] = backup;
    backup = oscard[yankee];
    backup = romeon.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.INPUT_BACKGROUND;
    offset['backgroundColor'] = backup;
    tangon['iconContainer'] = offset;
    offset = {};
    offset['flexShrink'] = foxtra;
    tangon['text'] = offset;
    offset = {'flexDirection': 'row', 'alignItems': 'center', 'flexWrap': 'wrap', 'gap': 2};
    tangon['textContainer'] = offset;
    offset = {};
    foxtra = 'flex-start';
    offset['alignSelf'] = foxtra;
    tangon['textIconContainer'] = offset;
    offset = {'paddingHorizontal': 8, 'paddingVertical': 4, 'borderRadius': null, 'overflow': 'hidden', 'margin': 2, 'flexDirection': 'row', 'alignItems': 'center'};
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.radii;
    foxtra = foxtra.lg;
    offset['borderRadius'] = foxtra;
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BG_BASE_TERTIARY;
    offset['backgroundColor'] = yankee;
    tangon['tag'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot12 = tangon;
    tangon = new Array(0);
    var _closure1_slot13 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) {
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            tangon = argFoo;
            report = tangon.searchHistoryItem;
            zuuluu = null;
            michal = Object.create(zuuluu);
            entity = 0;
            michal['searchHistoryItem'] = entity;
            offset = {};
            verify = tangon;
            option = michal;
            entity = copyDataProperties(offset, verify, option);
            oscard = report.type;
            tangon = _closure1_slot9;
            tangon = tangon.GROUP_DM;
            if(!(tangon !== oscard)) { _fun00024_ip = 275; continue _fun00023 }
 58:
            tangon = _closure1_slot9;
            tangon = tangon.DM;
            if(!(tangon !== oscard)) { _fun00024_ip = 236; continue _fun00023 }
 75:
            tangon = _closure1_slot9;
            tangon = tangon.TEXT;
            if(!(tangon !== oscard)) { _fun00024_ip = 197; continue _fun00023 }
 89:
            tangon = _closure1_slot9;
            tangon = tangon.GUILD_TEXT_CHANNEL;
            if(!(tangon !== oscard)) { _fun00024_ip = 158; continue _fun00023 }
 103:
            tangon = _closure1_slot9;
            tangon = tangon.GUILD_VOICE_CHANNEL;
            if(!(tangon !== oscard)) { _fun00024_ip = 119; continue _fun00023 }
 117:
            return zuuluu;
 119:
            golfie = _closure1_slot10;
            oscard = _closure1_slot18;
            tangon = {};
            offset = tangon;
            verify = entity;
            zuuluu = copyDataProperties(offset, verify);
            zuuluu = 'searchHistoryItem';
            tangon[zuuluu] = report;
            zuuluu = undefined;
            zuuluu = golfie.bind(zuuluu)(oscard, tangon);
            return zuuluu;
 158:
            golfie = _closure1_slot10;
            oscard = _closure1_slot19;
            tangon = {};
            offset = tangon;
            verify = entity;
            zuuluu = copyDataProperties(offset, verify);
            zuuluu = 'searchHistoryItem';
            tangon[zuuluu] = report;
            zuuluu = undefined;
            zuuluu = golfie.bind(zuuluu)(oscard, tangon);
            return zuuluu;
 197:
            golfie = _closure1_slot10;
            oscard = _closure1_slot15;
            tangon = {};
            offset = tangon;
            verify = entity;
            zuuluu = copyDataProperties(offset, verify);
            zuuluu = 'searchHistoryItem';
            tangon[zuuluu] = report;
            zuuluu = undefined;
            zuuluu = golfie.bind(zuuluu)(oscard, tangon);
            return zuuluu;
 236:
            golfie = _closure1_slot10;
            oscard = _closure1_slot17;
            tangon = {};
            offset = tangon;
            verify = entity;
            zuuluu = copyDataProperties(offset, verify);
            zuuluu = 'searchHistoryItem';
            tangon[zuuluu] = report;
            zuuluu = undefined;
            zuuluu = golfie.bind(zuuluu)(oscard, tangon);
            return zuuluu;
 275:
            tangon = _closure1_slot10;
            zuuluu = _closure1_slot16;
            michal = {};
            offset = michal;
            verify = entity;
            entity = copyDataProperties(offset, verify);
            entity = 'searchHistoryItem';
            michal[entity] = report;
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 26;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/components/list/rows/SearchHistoryRow.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();