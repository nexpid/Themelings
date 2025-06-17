// app/modules/channel_list_v2/native/hooks/useChannelListData.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 323; continue _fun00001 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot21;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golfie = _closure1_slot21;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tangon;
 330:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.TABLE_ROW_HEIGHT;
    var _closure1_slot5 = tangon;
    golfie = 3;
    tangon = oscard[golfie];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.CATEGORY_MARGIN_TOP;
    var _closure1_slot11 = option;
    option = tangon.getScaledCategoryRowHeight;
    var _closure1_slot12 = option;
    tangon = tangon.getScaledChannelRowHeight;
    var _closure1_slot13 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ChannelTypes;
    var _closure1_slot14 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.StaticChannelRoute;
    var _closure1_slot15 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.ChannelListGuildActionRow;
    var _closure1_slot16 = option;
    tangon = tangon.ChannelListChannelNoticeRow;
    var _closure1_slot17 = tangon;
    tangon = {};
    tangon['mass'] = golfie;
    var _closure1_slot18 = tangon;
    tangon = {};
    golfie = 'function useChannelListDataTsx1(finished){const{runOnJS,clearNavigationParams}=this.__closure;if(finished){runOnJS(clearNavigationParams)();}}';
    tangon['code'] = golfie;
    var _closure1_slot19 = tangon;
    tangon = 30;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/channel_list_v2/native/hooks/useChannelListData.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useChannelListData
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            echoed = michal.guildChannels;
            var _closure2_slot0 = echoed;
            backup = michal.guildChannelsVersion;
            romeon = michal.layout;
            golfie = undefined;
            if(!(romeon === golfie)) { _fun00008_ip = 68; continue _fun00007 }
 33:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 12;
            zuuluu = report[zuuluu];
            zuuluu = tangon.bind(golfie)(zuuluu);
            zuuluu = zuuluu.ChannelListLayoutTypes;
            romeon = zuuluu.COMPACT;
 68:
            oscard = michal.listRef;
            foxtra = michal.selectedChannelId;
            var _closure2_slot1 = foxtra;
            var _closure2_slot2 = golfie;
            var _closure2_slot3 = golfie;
            var _closure2_slot4 = golfie;
            var _closure2_slot5 = golfie;
            var _closure2_slot6 = golfie;
            var _closure2_slot7 = golfie;
            var _closure2_slot8 = golfie;
            var _closure2_slot9 = golfie;
            var _closure2_slot10 = golfie;
            var _closure2_slot11 = golfie;
            var _closure2_slot12 = golfie;
            var _closure2_slot13 = golfie;
            var _closure2_slot14 = golfie;
            source = echoed.id;
            _closure2_slot2 = source;
            option = _closure1_slot4;
            tangon = option.useState;
            zuuluu = function() {
                entity = global;
                entity = entity.Map;
                zuuluu = entity.prototype;
                zuuluu = Object.create(zuuluu, {constructor: {value: entity}});
                tangon = zuuluu;
                entity = new tangon[entity](zuuluu);
                entity = entity instanceof Object ? entity : zuuluu;
                var _closure3_slot0 = entity;
                entity = {};
                zuuluu = function(argFoo) { // Original name: get
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        michal = argFoo;
                        report = _closure3_slot0;
                        tangon = report.get;
                        entity = michal.itemKey;
                        entity = tangon.bind(report)(entity);
                        tangon = null;
                        tangon = tangon != entity;
                        if(!tangon) { _fun00010_ip = 66; continue _fun00009 }
 35:
                        golfie = _closure1_slot1;
                        oscard = _closure1_slot2;
                        report = 13;
                        report = oscard[report];
                        oscard = undefined;
                        report = golfie.bind(oscard)(report);
                        tangon = report.bind(oscard)(michal, entity);
 66:
                        if(tangon) { _fun00010_ip = 93; continue _fun00009 }
 69:
                        report = _closure3_slot0;
                        tangon = report.set;
                        zuuluu = michal.itemKey;
                        zuuluu = tangon.bind(report)(zuuluu, michal);
                        entity = michal;
 93:
                        return entity;
                    }
                };
                entity['get'] = zuuluu;
                michal = function() { // Original name: clear
                    michal = _closure3_slot0;
                    entity = michal.clear;
                    entity = entity.bind(michal)();
                    entity = undefined;
                    return entity;
                };
                entity['clear'] = michal;
                return entity;
            };
            report = tangon.bind(option)(zuuluu);
            tangon = _closure1_slot3;
            zuuluu = 1;
            tangon = tangon.bind(golfie)(report, zuuluu);
            zuuluu = 0;
            result = tangon[zuuluu];
            _closure2_slot3 = result;
            report = option.useEffect;
            tangon = new Array(2);
            tangon[0] = result;
            tangon[1] = source;
            zuuluu = function() {
                entity = function() {
                    zuuluu = _closure2_slot3;
                    michal = zuuluu.clear;
                    entity = _closure2_slot2;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                return entity;
            };
            zuuluu = report.bind(option)(zuuluu, tangon);
            tangon = echoed.getSections;
            zuuluu = false;
            output = tangon.bind(echoed)(zuuluu);
            _closure2_slot4 = output;
            zuuluu = _closure1_slot0;
            update = _closure1_slot2;
            tangon = 14;
            tangon = update[tangon];
            report = zuuluu.bind(golfie)(tangon);
            tangon = report.useFontScale;
            offset = tangon.bind(report)();
            _closure2_slot5 = offset;
            tangon = 15;
            tangon = update[tangon];
            report = zuuluu.bind(golfie)(tangon);
            tangon = report.useOptInEnabledForGuild;
            yankee = tangon.bind(report)(source);
            tangon = 16;
            tangon = update[tangon];
            verify = zuuluu.bind(golfie)(tangon);
            report = verify.useSectionsWithVoiceSummary;
            tangon = {};
            tangon['guildId'] = source;
            tangon['sections'] = output;
            tangon['guildChannels'] = echoed;
            tangon['guildChannelsVersion'] = backup;
            tangon['optInEnabled'] = yankee;
            sizing = report.bind(verify)(tangon);
            _closure2_slot6 = sizing;
            tangon = 17;
            tangon = update[tangon];
            report = zuuluu.bind(golfie)(tangon);
            tangon = report.useJumpToChannelId;
            report = tangon.bind(report)();
            _closure2_slot7 = report;
            tangon = _closure1_slot12;
            kiloes = tangon.bind(golfie)(offset);
            _closure2_slot8 = kiloes;
            tangon = _closure1_slot13;
            verify = tangon.bind(golfie)(offset);
            _closure2_slot9 = verify;
            _closure2_slot10 = verify;
            tangon = 18;
            tangon = update[tangon];
            yankee = zuuluu.bind(golfie)(tangon);
            tangon = yankee.getLayoutStyles;
            backup = tangon.bind(yankee)(romeon);
            _closure2_slot11 = backup;
            tangon = 19;
            yankee = update[tangon];
            vacuum = zuuluu.bind(golfie)(yankee);
            ctrled = vacuum.useStateFromStores;
            yankee = _closure1_slot8;
            romeon = new Array(1);
            romeon[0] = yankee;
            yankee = function() {
                zuuluu = _closure1_slot8;
                michal = zuuluu.getDirectoryChannelIds;
                entity = _closure2_slot2;
                michal = michal.bind(zuuluu)(entity);
                entity = 0;
                entity = michal[entity];
                return entity;
            };
            romeon = ctrled.bind(vacuum)(romeon, yankee);
            _closure2_slot12 = romeon;
            tangon = update[tangon];
            vacuum = zuuluu.bind(golfie)(tangon);
            ctrled = vacuum.useStateFromStores;
            tangon = _closure1_slot9;
            yankee = new Array(2);
            yankee[0] = tangon;
            michal = _closure1_slot7;
            yankee[1] = michal;
            tangon = new Array(1);
            tangon[0] = source;
            michal = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    tangon = _closure1_slot9;
                    zuuluu = tangon.getUserVoiceChannelId;
                    michal = _closure2_slot2;
                    report = _closure1_slot7;
                    entity = report.getId;
                    entity = entity.bind(report)();
                    michal = zuuluu.bind(tangon)(michal, entity);
                    entity = null;
                    zuuluu = entity != michal;
                    entity = undefined;
                    if(!zuuluu) { _fun00012_ip = 54; continue _fun00011 }
 51:
                    entity = michal;
 54:
                    return entity;
                }
            };
            yankee = ctrled.bind(vacuum)(yankee, michal, tangon);
            _closure2_slot13 = yankee;
            michal = 20;
            michal = update[michal];
            tangon = zuuluu.bind(golfie)(michal);
            michal = tangon.useGuildLiveChannelNoticeInfo;
            tangon = michal.bind(tangon)(source);
            michal = 21;
            michal = update[michal];
            zuuluu = zuuluu.bind(golfie)(michal);
            michal = zuuluu.getScaledLiveChannelNoticeHeight;
            michal = michal.bind(zuuluu)(offset, tangon);
            _closure2_slot14 = michal;
            tangon = option.useMemo;
            zuuluu = new Array(15);
            zuuluu[0] = echoed;
            zuuluu[1] = result;
            zuuluu[2] = output;
            zuuluu[3] = sizing;
            zuuluu[4] = kiloes;
            kiloes = backup.category;
            kiloes = kiloes.margin;
            kiloes = kiloes.marginTop;
            zuuluu[5] = kiloes;
            backup = backup.voiceUsers;
            backup = backup.height;
            zuuluu[6] = backup;
            zuuluu[7] = verify;
            zuuluu[8] = foxtra;
            zuuluu[9] = romeon;
            zuuluu[10] = yankee;
            zuuluu[11] = report;
            zuuluu[12] = offset;
            zuuluu[13] = verify;
            zuuluu[14] = michal;
            michal = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    whisks = function(argFoo) { // Original name: mutateAndPushItem
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            tangon = argFoo;
                            entity = _closure3_slot4;
                            verify = entity.length;
                            tangon['index'] = verify;
                            zuuluu = tangon.kind;
                            oscard = 'channel';
                            if(!(oscard !== zuuluu)) { _fun00016_ip = 221; continue _fun00015 }
 37:
                            entity = 'thread';
                            if(!(entity !== zuuluu)) { _fun00016_ip = 172; continue _fun00015 }
 48:
                            entity = 'sectionHeaderCategory';
                            if(!(entity !== zuuluu)) { _fun00016_ip = 126; continue _fun00015 }
 58:
                            entity = 'sectionFooterVoice';
                            if(!(entity !== zuuluu)) { _fun00016_ip = 126; continue _fun00015 }
 68:
                            entity = 'sectionFooterSeparator';
                            if(!(entity !== zuuluu)) { _fun00016_ip = 88; continue _fun00015 }
 78:
                            entity = tangon.kind;
                            _fun00016_ip = 272; continue _fun00015;
 88:
                            option = tangon.kind;
                            zuuluu = global;
                            zuuluu = zuuluu.HermesInternal;
                            golfie = zuuluu.concat;
                            report = '';
                            zuuluu = '-';
                            entity = golfie.bind(report)(option, zuuluu, verify);
                            _fun00016_ip = 272; continue _fun00015;
 126:
                            verify = tangon.kind;
                            zuuluu = tangon.category;
                            option = zuuluu.id;
                            zuuluu = global;
                            zuuluu = zuuluu.HermesInternal;
                            golfie = zuuluu.concat;
                            report = '';
                            zuuluu = '-';
                            entity = golfie.bind(report)(verify, zuuluu, option);
                            _fun00016_ip = 272; continue _fun00015;
 172:
                            kiloes = tangon.kind;
                            foxtra = tangon.section;
                            yankee = tangon.threadId;
                            zuuluu = global;
                            zuuluu = zuuluu.HermesInternal;
                            golfie = zuuluu.concat;
                            sizing = '';
                            zuuluu = '-';
                            backup = zuuluu;
                            romeon = zuuluu;
                            entity = sizing[golfie](kiloes, backup, foxtra, romeon, yankee, offset);
                            _fun00016_ip = 272; continue _fun00015;
 221:
                            kiloes = tangon.kind;
                            foxtra = tangon.section;
                            zuuluu = tangon.channel;
                            yankee = zuuluu.id;
                            zuuluu = global;
                            zuuluu = zuuluu.HermesInternal;
                            golfie = zuuluu.concat;
                            sizing = '';
                            zuuluu = '-';
                            backup = zuuluu;
                            romeon = zuuluu;
                            entity = sizing[golfie](kiloes, backup, foxtra, romeon, yankee, offset);
 272:
                            tangon['itemKey'] = entity;
                            entity = tangon.kind;
                            zuuluu = 'sectionHeaderCategory';
                            entity = zuuluu === entity;
                            if(entity) { _fun00016_ip = 311; continue _fun00015 }
 296:
                            golfie = tangon.kind;
                            report = 'sectionHeaderFavorites';
                            entity = report === golfie;
 311:
                            if(entity) { _fun00016_ip = 329; continue _fun00015 }
 314:
                            golfie = tangon.kind;
                            report = 'sectionHeaderRecents';
                            entity = report === golfie;
 329:
                            if(entity) { _fun00016_ip = 347; continue _fun00015 }
 332:
                            golfie = tangon.kind;
                            report = 'sectionHeaderRecentlyVisited';
                            entity = report === golfie;
 347:
                            if(entity) { _fun00016_ip = 417; continue _fun00015 }
 350:
                            report = tangon.kind;
                            report = oscard === report;
                            if(!report) { _fun00016_ip = 389; continue _fun00015 }
 362:
                            oscard = tangon.channel;
                            golfie = oscard.type;
                            oscard = _closure1_slot14;
                            oscard = oscard.GUILD_CATEGORY;
                            report = golfie === oscard;
 389:
                            if(!report) { _fun00016_ip = 414; continue _fun00015 }
 392:
                            golfie = tangon.section;
                            oscard = _closure2_slot0;
                            oscard = oscard.voiceChannelsSectionNumber;
                            report = golfie === oscard;
 414:
                            entity = report;
 417:
                            if(!entity) { _fun00016_ip = 529; continue _fun00015 }
 420:
                            report = _closure3_slot0;
                            golfie = null;
                            verify = golfie == report;
                            oscard = undefined;
                            if(verify) { _fun00016_ip = 440; continue _fun00015 }
 435:
                            oscard = report.kind;
 440:
                            report = 'happeningNow';
                            report = report === oscard;
                            if(report) { _fun00016_ip = 479; continue _fun00015 }
 451:
                            oscard = _closure3_slot0;
                            verify = golfie == oscard;
                            option = undefined;
                            if(verify) { _fun00016_ip = 469; continue _fun00015 }
 464:
                            option = oscard.kind;
 469:
                            oscard = 'sectionFooterSeparator';
                            report = oscard === option;
 479:
                            if(report) { _fun00016_ip = 490; continue _fun00015 }
 482:
                            oscard = _closure3_slot0;
                            report = golfie == oscard;
 490:
                            if(report) { _fun00016_ip = 526; continue _fun00015 }
 493:
                            oscard = _closure3_slot0;
                            oscard = golfie != oscard;
                            if(!oscard) { _fun00016_ip = 523; continue _fun00015 }
 504:
                            golfie = _closure3_slot0;
                            option = golfie.kind;
                            golfie = 'newPanelsListHeader';
                            oscard = golfie === option;
 523:
                            report = oscard;
 526:
                            entity = report;
 529:
                            if(!entity) { _fun00016_ip = 540; continue _fun00015 }
 532:
                            entity = true;
                            tangon['isFirstCategory'] = entity;
 540:
                            entity = tangon.kind;
                            if(!(zuuluu === entity)) { _fun00016_ip = 590; continue _fun00015 }
 549:
                            zuuluu = tangon.isFirstCategory;
                            entity = _closure2_slot8;
                            if(zuuluu) { _fun00016_ip = 584; continue _fun00015 }
 565:
                            zuuluu = _closure1_slot11;
                            zuuluu = entity + zuuluu;
                            tangon['height'] = zuuluu;
                            _fun00016_ip = 590; continue _fun00015;
 584:
                            tangon['height'] = entity;
 590:
                            zuuluu = _closure3_slot2;
                            entity = tangon.height;
                            entity = zuuluu + entity;
                            _closure3_slot2 = entity;
                            zuuluu = _closure2_slot3;
                            entity = zuuluu.get;
                            entity = entity.bind(zuuluu)(tangon);
                            var _closure3_slot0 = entity;
                            tangon = _closure3_slot4;
                            zuuluu = tangon.push;
                            entity = _closure3_slot0;
                            entity = zuuluu.bind(tangon)(entity);
                            tangon = _closure1_slot0;
                            zuuluu = _closure1_slot2;
                            entity = 23;
                            zuuluu = zuuluu[entity];
                            entity = undefined;
                            report = tangon.bind(entity)(zuuluu);
                            tangon = report.isReadableItem;
                            zuuluu = _closure3_slot0;
                            zuuluu = tangon.bind(report)(zuuluu);
                            if(!zuuluu) { _fun00016_ip = 707; continue _fun00015 }
 689:
                            tangon = _closure3_slot5;
                            zuuluu = tangon.push;
                            michal = _closure3_slot0;
                            michal = zuuluu.bind(tangon)(michal);
 707:
                            return entity;
                        }
                    };
                    var _closure3_slot7 = whisks;
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 22;
                    zuuluu = report[entity];
                    sierra = undefined;
                    zuuluu = tangon.bind(sierra)(zuuluu);
                    zuuluu = zuuluu.DIVIDER_MARGIN_TOP;
                    entity = report[entity];
                    entity = tangon.bind(sierra)(entity);
                    entity = entity.DIVIDER_MARGIN_BOTTOM;
                    entity = zuuluu + entity;
                    status = 1;
                    target = status + entity;
                    var _closure3_slot1 = target;
                    papara = 0;
                    var _closure3_slot2 = papara;
                    cntext = -1;
                    var _closure3_slot3 = cntext;
                    tangon = new Array(0);
                    var _closure3_slot4 = tangon;
                    zuuluu = new Array(0);
                    var _closure3_slot5 = zuuluu;
                    report = _closure1_slot20;
                    entity = _closure2_slot4;
                    config = report.bind(sierra)(entity);
                    report = config.bind(sierra)();
                    entity = report.done;
                    sequen = 'showAllVoiceChannelsButton';
                    vacuum = null;
                    ctrled = 23;
                    source = 2;
                    update = 'sectionFooterVoice';
                    echoed = 52;
                    result = 'sectionFooterSeparator';
                    output = false;
                    sizing = 'sectionHeaderRecents';
                    kiloes = 'sectionHeaderVoiceChannels';
                    backup = 'sectionHeaderCategory';
                    foxtra = 24;
                    romeon = report;
                    yankee = undefined;
                    offset = undefined;
                    verify = undefined;
                    option = undefined;
                    golfie = undefined;
                    oscard = undefined;
                    report = undefined;
                    if(entity) { _fun00014_ip = 1350; continue _fun00013 }
 206:
                    variable46 = romeon.value;
                    variable40 = cntext + 1;
                    _closure3_slot3 = variable40;
                    if(!(papara === variable46)) { _fun00014_ip = 276; continue _fun00013 }
 222:
                    equals = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[ctrled];
                    quebec = equals.bind(sierra)(entity);
                    equals = quebec.isVoiceChannelsSection;
                    entity = _closure2_slot0;
                    entity = equals.bind(quebec)(variable40, entity);
                    variable38 = yankee;
                    variable37 = offset;
                    variable36 = verify;
                    quebec = option;
                    equals = report;
                    if(!entity) { _fun00014_ip = 1314; continue _fun00013 }
 276:
                    variable39 = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[ctrled];
                    variable41 = variable39.bind(sierra)(entity);
                    variable39 = variable41.isFavoritesSection;
                    entity = _closure2_slot0;
                    entity = variable39.bind(variable41)(variable40, entity);
                    if(entity) { _fun00014_ip = 792; continue _fun00013 }
 315:
                    variable39 = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[ctrled];
                    variable41 = variable39.bind(sierra)(entity);
                    variable39 = variable41.isRecentsSection;
                    entity = _closure2_slot0;
                    entity = variable39.bind(variable41)(variable40, entity);
                    if(entity) { _fun00014_ip = 704; continue _fun00013 }
 354:
                    variable39 = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[ctrled];
                    variable41 = variable39.bind(sierra)(entity);
                    variable39 = variable41.isVoiceChannelsSection;
                    entity = _closure2_slot0;
                    entity = variable39.bind(variable41)(variable40, entity);
                    if(entity) { _fun00014_ip = 573; continue _fun00013 }
 393:
                    variable39 = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[foxtra];
                    entity = variable39.bind(sierra)(entity);
                    entity = entity.SECTION_INDEX_FIRST_NAMED_CATEGORY;
                    variable45 = yankee;
                    variable44 = offset;
                    variable43 = verify;
                    variable42 = option;
                    if(!(variable40 >= entity)) { _fun00014_ip = 833; continue _fun00013 }
 435:
                    variable39 = _closure2_slot0;
                    entity = variable39.getNamedCategoryFromSection;
                    entity = entity.bind(variable39)(variable40);
                    variable45 = yankee;
                    variable44 = offset;
                    variable43 = verify;
                    variable42 = entity;
                    if(!(vacuum != entity)) { _fun00014_ip = 833; continue _fun00013 }
 469:
                    variable39 = {};
                    variable39['kind'] = backup;
                    variable39['section'] = variable40;
                    variable39['category'] = entity;
                    variable47 = _closure2_slot8;
                    variable48 = _closure1_slot0;
                    variable41 = _closure1_slot2;
                    variable41 = variable41[foxtra];
                    variable41 = variable48.bind(sierra)(variable41);
                    variable48 = variable41.SECTION_INDEX_FIRST_NAMED_CATEGORY;
                    variable41 = 0;
                    if(!(variable40 !== variable48)) { _fun00014_ip = 538; continue _fun00013 }
 517:
                    variable48 = _closure2_slot11;
                    variable48 = variable48.category;
                    variable48 = variable48.margin;
                    variable41 = variable48.marginTop;
 538:
                    variable41 = variable47 + variable41;
                    variable39['height'] = variable41;
                    variable39['isFirstCategory'] = output;
                    variable39 = whisks.bind(sierra)(variable39);
                    variable45 = yankee;
                    variable44 = offset;
                    variable43 = verify;
                    variable42 = entity;
                    _fun00014_ip = 833; continue _fun00013;
 573:
                    variable41 = _closure2_slot0;
                    variable39 = variable41.getCategoryFromSection;
                    entity = variable41.voiceChannelsSectionNumber;
                    entity = variable39.bind(variable41)(entity);
                    variable39 = vacuum == entity;
                    if(variable39) { _fun00014_ip = 611; continue _fun00013 }
 601:
                    variable41 = entity.isEmpty;
                    variable39 = variable41.bind(entity)();
 611:
                    variable45 = yankee;
                    variable44 = offset;
                    variable43 = entity;
                    variable42 = option;
                    if(variable39) { _fun00014_ip = 833; continue _fun00013 }
 629:
                    variable39 = {};
                    variable39['kind'] = result;
                    variable39['height'] = target;
                    variable39 = whisks.bind(sierra)(variable39);
                    variable39 = entity.isCollapsed;
                    variable45 = yankee;
                    variable44 = offset;
                    variable43 = entity;
                    variable42 = option;
                    if(!variable39) { _fun00014_ip = 833; continue _fun00013 }
 668:
                    variable39 = {};
                    variable39['kind'] = kiloes;
                    variable41 = _closure2_slot8;
                    variable39['height'] = variable41;
                    variable39 = whisks.bind(sierra)(variable39);
                    variable45 = yankee;
                    variable44 = offset;
                    variable43 = entity;
                    variable42 = option;
                    _fun00014_ip = 833; continue _fun00013;
 704:
                    variable41 = {};
                    variable41['kind'] = sizing;
                    entity = _closure2_slot8;
                    variable41['height'] = entity;
                    variable39 = _closure2_slot0;
                    entity = variable39.getCategoryFromSection;
                    entity = entity.bind(variable39)(variable40);
                    variable47 = vacuum == entity;
                    variable39 = undefined;
                    if(variable47) { _fun00014_ip = 752; continue _fun00013 }
 742:
                    variable47 = entity.getShownChannelAndThreadIds;
                    variable39 = variable47.bind(entity)();
 752:
                    variable47 = variable39;
                    if(!(vacuum == variable39)) { _fun00014_ip = 763; continue _fun00013 }
 759:
                    variable47 = new Array(0);
 763:
                    variable41['channelIds'] = variable47;
                    variable41['isFirstCategory'] = output;
                    variable41 = whisks.bind(sierra)(variable41);
                    variable45 = variable39;
                    variable44 = entity;
                    variable43 = verify;
                    variable42 = option;
                    _fun00014_ip = 833; continue _fun00013;
 792:
                    entity = {'kind': 'sectionHeaderFavorites', 'height': null, 'isFirstCategory': false};
                    variable39 = _closure2_slot8;
                    entity['height'] = variable39;
                    entity = whisks.bind(sierra)(entity);
                    variable45 = yankee;
                    variable44 = offset;
                    variable43 = verify;
                    variable42 = option;
 833:
                    variable41 = function() { // Original name: _loop
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            oscard = _closure3_slot3;
                            golfie = _closure1_slot0;
                            entity = _closure1_slot2;
                            option = 24;
                            report = entity[option];
                            entity = undefined;
                            report = golfie.bind(entity)(report);
                            report = report.SECTION_INDEX_CHANNEL_NOTICES;
                            if(!(oscard !== report)) { _fun00018_ip = 915; continue _fun00017 }
 47:
                            oscard = _closure3_slot3;
                            golfie = _closure1_slot0;
                            report = _closure1_slot2;
                            report = report[option];
                            report = golfie.bind(entity)(report);
                            report = report.SECTION_INDEX_GUILD_ACTIONS;
                            if(!(oscard !== report)) { _fun00018_ip = 431; continue _fun00017 }
 81:
                            verify = _closure2_slot0;
                            golfie = verify.getChannelFromSectionRow;
                            oscard = _closure3_slot3;
                            report = _closure3_slot6;
                            report = golfie.bind(verify)(oscard, report);
                            offset = null;
                            if(!(offset != report)) { _fun00018_ip = 1072; continue _fun00017 }
 117:
                            report = report.channel;
                            var _closure4_slot0 = report;
                            golfie = _closure2_slot9;
                            verify = report.record;
                            oscard = verify.isGuildVocal;
                            oscard = oscard.bind(verify)();
                            verify = golfie;
                            if(!oscard) { _fun00018_ip = 265; continue _fun00017 }
 152:
                            romeon = _closure1_slot10;
                            yankee = romeon.countVoiceStatesForChannel;
                            oscard = report.id;
                            yankee = yankee.bind(romeon)(oscard);
                            oscard = 0;
                            verify = golfie;
                            if(!(yankee > oscard)) { _fun00018_ip = 265; continue _fun00017 }
 181:
                            romeon = _closure1_slot0;
                            foxtra = _closure1_slot2;
                            oscard = 25;
                            oscard = foxtra[oscard];
                            kiloes = romeon.bind(entity)(oscard);
                            backup = kiloes.getVoiceUserHeight;
                            oscard = _closure2_slot5;
                            oscard = backup.bind(kiloes)(oscard);
                            backup = oscard * yankee;
                            oscard = 26;
                            yankee = foxtra[oscard];
                            yankee = romeon.bind(entity)(yankee);
                            yankee = yankee.VOICE_USERS_MARGIN_BOTTOM;
                            yankee = backup + yankee;
                            oscard = foxtra[oscard];
                            oscard = romeon.bind(entity)(oscard);
                            oscard = oscard.VOICE_USERS_MARGIN_TOP;
                            oscard = yankee + oscard;
                            verify = golfie + oscard;
 265:
                            golfie = _closure3_slot7;
                            oscard = {};
                            yankee = 'channel';
                            oscard['kind'] = yankee;
                            yankee = report.record;
                            oscard['channel'] = yankee;
                            yankee = report.isMuted;
                            oscard['isMuted'] = yankee;
                            yankee = report.subtitle;
                            romeon = offset != yankee;
                            offset = undefined;
                            if(!romeon) { _fun00018_ip = 318; continue _fun00017 }
 315:
                            offset = yankee;
 318:
                            oscard['subtitle'] = offset;
                            offset = report.threadCount;
                            oscard['threadCount'] = offset;
                            offset = _closure3_slot3;
                            oscard['section'] = offset;
                            oscard['height'] = verify;
                            offset = report.id;
                            verify = _closure2_slot1;
                            verify = offset === verify;
                            if(verify) { _fun00018_ip = 375; continue _fun00017 }
 362:
                            yankee = report.id;
                            offset = _closure2_slot13;
                            verify = yankee === offset;
 375:
                            oscard['selected'] = verify;
                            verify = report.id;
                            option = _closure2_slot7;
                            option = verify === option;
                            oscard['needsJumpAndHighlight'] = option;
                            oscard = golfie.bind(entity)(oscard);
                            oscard = report.threadIds;
                            report = oscard.forEach;
                            tangon = function(argFoo, argBar) {
                                tangon = argFoo;
                                zuuluu = _closure3_slot7;
                                michal = {};
                                report = 'thread';
                                michal['kind'] = report;
                                michal['threadId'] = tangon;
                                report = argBar;
                                michal['threadIndex'] = report;
                                report = _closure4_slot0;
                                report = report.threadCount;
                                michal['threadCount'] = report;
                                entity = _closure3_slot3;
                                michal['section'] = entity;
                                report = _closure2_slot10;
                                michal['height'] = report;
                                entity = _closure2_slot1;
                                entity = tangon === entity;
                                michal['selected'] = entity;
                                entity = undefined;
                                michal = zuuluu.bind(entity)(michal);
                                return entity;
                            };
                            tangon = report.bind(oscard)(tangon);
                            _fun00018_ip = 1072; continue _fun00017;
 431:
                            report = _closure2_slot0;
                            tangon = report.getGuildActionSection;
                            golfie = tangon.bind(report)();
                            report = golfie.getRow;
                            tangon = _closure3_slot6;
                            golfie = report.bind(golfie)(tangon);
                            tangon = null;
                            if(!(tangon != golfie)) { _fun00018_ip = 1072; continue _fun00017 }
 472:
                            tangon = _closure1_slot16;
                            tangon = tangon.GUILD_HUB_HEADER_OPTIONS;
                            if(!(golfie !== tangon)) { _fun00018_ip = 870; continue _fun00017 }
 489:
                            tangon = _closure1_slot16;
                            tangon = tangon.GUILD_SCHEDULED_EVENTS;
                            if(!(golfie !== tangon)) { _fun00018_ip = 870; continue _fun00017 }
 506:
                            tangon = _closure1_slot16;
                            tangon = tangon.GUILD_HOME;
                            if(!(golfie !== tangon)) { _fun00018_ip = 819; continue _fun00017 }
 523:
                            tangon = _closure1_slot16;
                            tangon = tangon.GUILD_ROLE_SUBSCRIPTIONS;
                            if(!(golfie !== tangon)) { _fun00018_ip = 768; continue _fun00017 }
 540:
                            tangon = _closure1_slot16;
                            tangon = tangon.CHANNELS_AND_ROLES;
                            if(!(golfie !== tangon)) { _fun00018_ip = 686; continue _fun00017 }
 557:
                            tangon = _closure1_slot16;
                            tangon = tangon.GUILD_DIRECTORY;
                            if(!(golfie !== tangon)) { _fun00018_ip = 641; continue _fun00017 }
 571:
                            tangon = _closure1_slot16;
                            tangon = tangon.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR;
                            if(!(golfie === tangon)) { _fun00018_ip = 1072; continue _fun00017 }
 588:
                            report = _closure3_slot7;
                            tangon = {'kind': 'newMemberActions', 'height': 48};
                            tangon = report.bind(entity)(tangon);
                            tangon = {};
                            option = 'sectionFooterSeparator';
                            tangon['kind'] = option;
                            option = _closure3_slot1;
                            tangon['height'] = option;
                            tangon = report.bind(entity)(tangon);
                            _fun00018_ip = 1072; continue _fun00017;
 641:
                            report = _closure3_slot7;
                            tangon = {};
                            tangon['kind'] = golfie;
                            verify = _closure2_slot1;
                            option = _closure2_slot12;
                            option = verify === option;
                            tangon['selected'] = option;
                            option = _closure2_slot9;
                            tangon['height'] = option;
                            tangon = report.bind(entity)(tangon);
                            _fun00018_ip = 1072; continue _fun00017;
 686:
                            report = _closure3_slot7;
                            tangon = {};
                            option = _closure1_slot16;
                            option = option.CHANNELS_AND_ROLES;
                            tangon['kind'] = option;
                            verify = _closure2_slot1;
                            option = _closure1_slot15;
                            option = option.CHANNEL_BROWSER;
                            option = verify === option;
                            if(option) { _fun00018_ip = 745; continue _fun00017 }
 727:
                            offset = _closure2_slot1;
                            verify = _closure1_slot15;
                            verify = verify.CUSTOMIZE_COMMUNITY;
                            option = offset === verify;
 745:
                            tangon['selected'] = option;
                            option = _closure2_slot9;
                            tangon['height'] = option;
                            tangon = report.bind(entity)(tangon);
                            _fun00018_ip = 1072; continue _fun00017;
 768:
                            report = _closure3_slot7;
                            tangon = {};
                            tangon['kind'] = golfie;
                            verify = _closure2_slot1;
                            option = _closure1_slot15;
                            option = option.ROLE_SUBSCRIPTIONS;
                            option = verify === option;
                            tangon['selected'] = option;
                            option = _closure2_slot9;
                            tangon['height'] = option;
                            tangon = report.bind(entity)(tangon);
                            _fun00018_ip = 1072; continue _fun00017;
 819:
                            report = _closure3_slot7;
                            tangon = {};
                            tangon['kind'] = golfie;
                            verify = _closure2_slot1;
                            option = _closure1_slot15;
                            option = option.GUILD_HOME;
                            option = verify === option;
                            tangon['selected'] = option;
                            option = _closure2_slot9;
                            tangon['height'] = option;
                            tangon = report.bind(entity)(tangon);
                            _fun00018_ip = 1072; continue _fun00017;
 870:
                            tangon = _closure1_slot16;
                            tangon = tangon.GUILD_SCHEDULED_EVENTS;
                            if(!(golfie !== tangon)) { _fun00018_ip = 1072; continue _fun00017 }
 887:
                            report = _closure3_slot7;
                            tangon = {};
                            tangon['kind'] = golfie;
                            oscard = _closure2_slot9;
                            tangon['height'] = oscard;
                            tangon = report.bind(entity)(tangon);
                            _fun00018_ip = 1072; continue _fun00017;
 915:
                            oscard = _closure2_slot0;
                            tangon = oscard.getChannelNoticeSection;
                            golfie = tangon.bind(oscard)();
                            oscard = golfie.getRow;
                            tangon = _closure3_slot6;
                            tangon = oscard.bind(golfie)(tangon);
                            oscard = null;
                            if(!(oscard != tangon)) { _fun00018_ip = 1072; continue _fun00017 }
 953:
                            oscard = _closure1_slot17;
                            oscard = oscard.GUILD_PROGRESS;
                            if(!(tangon !== oscard)) { _fun00018_ip = 1049; continue _fun00017 }
 967:
                            oscard = _closure1_slot17;
                            oscard = oscard.MFA_WARNING;
                            if(!(tangon !== oscard)) { _fun00018_ip = 1024; continue _fun00017 }
 981:
                            zuuluu = _closure1_slot17;
                            zuuluu = zuuluu.LIVE_CHANNEL_NOTICE;
                            if(!(tangon === zuuluu)) { _fun00018_ip = 1072; continue _fun00017 }
 995:
                            tangon = _closure3_slot7;
                            zuuluu = {};
                            oscard = 'liveChannelNotice';
                            zuuluu['kind'] = oscard;
                            report = _closure2_slot14;
                            zuuluu['height'] = report;
                            zuuluu = tangon.bind(entity)(zuuluu);
                            _fun00018_ip = 1072; continue _fun00017;
 1024:
                            tangon = _closure3_slot7;
                            zuuluu = {'kind': 'mfaWarning', 'height': 48};
                            zuuluu = tangon.bind(entity)(zuuluu);
                            _fun00018_ip = 1072; continue _fun00017;
 1049:
                            zuuluu = _closure3_slot7;
                            michal = {'kind': 'guildProgress', 'height': 48};
                            michal = zuuluu.bind(entity)(michal);
 1072:
                            return entity;
                        }
                    };
                    var _closure3_slot6 = papara;
                    variable47 = papara < variable46;
                    entity = 0;
                    variable39 = 0;
                    if(!variable47) { _fun00014_ip = 876; continue _fun00013 }
 855:
                    variable47 = variable41.bind(sierra)();
                    variable47 = entity + 1;
                    _closure3_slot6 = variable47;
                    entity = variable47;
                    variable39 = entity;
                    if(variable39 < variable46) { _fun00014_ip = 855; continue _fun00013 }
 876:
                    variable46 = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[ctrled];
                    variable47 = variable46.bind(sierra)(entity);
                    variable46 = variable47.isFavoritesSection;
                    entity = _closure2_slot0;
                    entity = variable46.bind(variable47)(variable40, entity);
                    if(entity) { _fun00014_ip = 945; continue _fun00013 }
 912:
                    variable47 = _closure1_slot0;
                    variable46 = _closure1_slot2;
                    variable46 = variable46[ctrled];
                    variable48 = variable47.bind(sierra)(variable46);
                    variable47 = variable48.isRecentsSection;
                    variable46 = _closure2_slot0;
                    entity = variable47.bind(variable48)(variable40, variable46);
 945:
                    if(!entity) { _fun00014_ip = 963; continue _fun00013 }
 948:
                    entity = {};
                    entity['kind'] = result;
                    entity['height'] = target;
                    entity = whisks.bind(sierra)(entity);
 963:
                    entity = _closure2_slot6;
                    entity = variable40 in entity;
                    if(!entity) { _fun00014_ip = 1061; continue _fun00013 }
 974:
                    entity = _closure2_slot6;
                    entity = entity[variable40];
                    variable47 = entity.category;
                    variable46 = entity.activeVoiceChannels;
                    entity = {};
                    entity['kind'] = update;
                    entity['category'] = variable47;
                    entity['activeVoiceChannels'] = variable46;
                    variable46 = variable46.length;
                    variable47 = variable46 > status;
                    variable46 = echoed;
                    if(variable47) { _fun00014_ip = 1052; continue _fun00013 }
 1025:
                    variable48 = _closure2_slot9;
                    variable47 = _closure2_slot11;
                    variable47 = variable47.voiceUsers;
                    variable47 = variable47.height;
                    variable47 = variable48 + variable47;
                    variable46 = variable47 - source;
 1052:
                    entity['height'] = variable46;
                    entity = whisks.bind(sierra)(entity);
 1061:
                    variable46 = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[ctrled];
                    variable47 = variable46.bind(sierra)(entity);
                    variable46 = variable47.isVoiceChannelsSection;
                    entity = _closure2_slot0;
                    entity = variable46.bind(variable47)(variable40, entity);
                    variable38 = variable45;
                    variable37 = variable44;
                    variable36 = variable43;
                    quebec = variable42;
                    golfie = variable41;
                    oscard = variable39;
                    equals = report;
                    if(!entity) { _fun00014_ip = 1314; continue _fun00013 }
 1121:
                    variable46 = _closure2_slot0;
                    entity = variable46.getCategoryFromSection;
                    entity = entity.bind(variable46)(variable40);
                    variable38 = variable45;
                    variable37 = variable44;
                    variable36 = variable43;
                    quebec = variable42;
                    golfie = variable41;
                    oscard = variable39;
                    equals = entity;
                    if(!(vacuum != equals)) { _fun00014_ip = 1314; continue _fun00013 }
 1164:
                    variable46 = entity.getHiddenChannelIds;
                    variable46 = variable46.bind(entity)();
                    variable46 = variable46.length;
                    if(!(!(variable46 > papara))) { _fun00014_ip = 1217; continue _fun00013 }
 1183:
                    variable46 = entity.isEmpty;
                    variable46 = variable46.bind(entity)();
                    variable38 = variable45;
                    variable37 = variable44;
                    variable36 = variable43;
                    quebec = variable42;
                    golfie = variable41;
                    oscard = variable39;
                    equals = entity;
                    if(variable46) { _fun00014_ip = 1314; continue _fun00013 }
 1217:
                    variable46 = entity.getShownChannelIds;
                    variable46 = variable46.bind(entity)();
                    variable46 = variable46.length;
                    variable47 = entity.getShownChannelIds;
                    variable47 = variable47.bind(entity)();
                    variable46 = variable46 - status;
                    variable48 = variable47[variable46];
                    variable47 = _closure1_slot10;
                    variable46 = variable47.countVoiceStatesForChannel;
                    variable47 = variable46.bind(variable47)(variable48);
                    variable46 = {};
                    variable46['kind'] = sequen;
                    variable48 = _closure1_slot5;
                    variable46['height'] = variable48;
                    variable47 = variable47 > papara;
                    variable46['isLastShownChannelActive'] = variable47;
                    variable46 = whisks.bind(sierra)(variable46);
                    variable38 = variable45;
                    variable37 = variable44;
                    variable36 = variable43;
                    quebec = variable42;
                    golfie = variable41;
                    oscard = variable39;
                    equals = entity;
 1314:
                    variable39 = config.bind(sierra)();
                    entity = variable39.done;
                    yankee = variable38;
                    offset = variable37;
                    verify = variable36;
                    option = quebec;
                    report = equals;
                    cntext = variable40;
                    romeon = variable39;
                    if(!entity) { _fun00014_ip = 206; continue _fun00013 }
 1350:
                    entity = {};
                    entity['data'] = tangon;
                    entity['unreadBarsData'] = zuuluu;
                    michal = _closure3_slot2;
                    entity['estimateContentHeight'] = michal;
                    return entity;
                }
            };
            michal = tangon.bind(option)(michal, zuuluu);
            tangon = michal.data;
            zuuluu = michal.unreadBarsData;
            michal = michal.estimateContentHeight;
            entity = function(argFoo, argBar, argBaz) { // Original name: useJumpToChannel
                tangon = argFoo;
                option = argBar;
                oscard = argBaz;
                var _closure3_slot0 = tangon;
                var _closure3_slot1 = option;
                var _closure3_slot2 = oscard;
                golfie = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 27;
                zuuluu = zuuluu[entity];
                entity = undefined;
                golfie = golfie.bind(entity)(zuuluu);
                zuuluu = golfie.useNavigation;
                zuuluu = zuuluu.bind(golfie)();
                var _closure3_slot3 = zuuluu;
                report = _closure1_slot4;
                verify = report.useCallback;
                golfie = new Array(1);
                golfie[0] = zuuluu;
                zuuluu = function() {
                    tangon = _closure3_slot3;
                    zuuluu = tangon.setParams;
                    michal = {};
                    entity = undefined;
                    michal['jumpToChannelId'] = entity;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                golfie = verify.bind(report)(zuuluu, golfie);
                var _closure3_slot4 = golfie;
                zuuluu = report.useRef;
                zuuluu = zuuluu.bind(report)(tangon);
                var _closure3_slot5 = zuuluu;
                tangon = report.useEffect;
                zuuluu = function() {
                    michal = _closure3_slot5;
                    entity = _closure3_slot0;
                    michal['current'] = entity;
                    entity = undefined;
                    return entity;
                };
                zuuluu = tangon.bind(report)(zuuluu);
                tangon = report.useEffect;
                zuuluu = new Array(3);
                zuuluu[0] = option;
                zuuluu[1] = golfie;
                zuuluu[2] = oscard;
                michal = function() {
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        michal = _closure3_slot1;
                        zuuluu = null;
                        if(!(zuuluu != michal)) { _fun00020_ip = 351; continue _fun00019 }
 18:
                        tangon = _closure1_slot6;
                        oscard = tangon.useReducedMotion;
                        tangon = _closure3_slot5;
                        golfie = tangon.current;
                        report = golfie.findIndex;
                        tangon = function(argFoo) {
                            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                                michal = argFoo;
                                zuuluu = michal.kind;
                                entity = 'channel';
                                entity = entity === zuuluu;
                                if(!entity) { _fun00022_ip = 25; continue _fun00021 }
 19:
                                entity = michal.needsJumpAndHighlight;
 25:
                                return entity;
                            }
                        };
                        golfie = report.bind(golfie)(tangon);
                        backup = 0;
                        if(!(!(golfie < backup))) { _fun00020_ip = 341; continue _fun00019 }
 67:
                        tangon = _closure3_slot2;
                        report = tangon.current;
                        if(!(zuuluu != report)) { _fun00020_ip = 120; continue _fun00019 }
 80:
                        tangon = report.scrollToIndex;
                        zuuluu = {};
                        zuuluu['index'] = golfie;
                        oscard = !oscard;
                        zuuluu['animated'] = oscard;
                        oscard = 0.5;
                        zuuluu['viewPosition'] = oscard;
                        zuuluu = tangon.bind(report)(zuuluu);
 120:
                        result = _closure1_slot0;
                        echoed = _closure1_slot2;
                        zuuluu = 17;
                        zuuluu = echoed[zuuluu];
                        output = undefined;
                        zuuluu = result.bind(output)(zuuluu);
                        tangon = zuuluu.jumpToChannelHighlightOpacity;
                        zuuluu = tangon.set;
                        sizing = 28;
                        report = echoed[sizing];
                        golfie = result.bind(output)(report);
                        oscard = golfie.withSequence;
                        yankee = 29;
                        report = echoed[yankee];
                        offset = result.bind(output)(report);
                        verify = offset.withSpring;
                        foxtra = _closure1_slot18;
                        report = 1;
                        report = verify.bind(offset)(report, foxtra);
                        verify = echoed[sizing];
                        offset = result.bind(output)(verify);
                        verify = offset.withDelay;
                        yankee = echoed[yankee];
                        romeon = result.bind(output)(yankee);
                        yankee = romeon.withSpring;
                        option = function(argFoo) { // Original name: t
                            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                                entity = argFoo;
                                if(!entity) { _fun00024_ip = 52; continue _fun00023 }
 6:
                                zuuluu = _closure1_slot0;
                                michal = _closure1_slot2;
                                entity = 28;
                                entity = michal[entity];
                                michal = undefined;
                                tangon = zuuluu.bind(michal)(entity);
                                zuuluu = tangon.runOnJS;
                                entity = _closure3_slot4;
                                entity = zuuluu.bind(tangon)(entity);
                                entity = entity.bind(michal)();
 52:
                                entity = undefined;
                                return entity;
                            }
                        };
                        kiloes = {};
                        sizing = echoed[sizing];
                        sizing = result.bind(output)(sizing);
                        sizing = sizing.runOnJS;
                        kiloes['runOnJS'] = sizing;
                        sizing = _closure3_slot4;
                        kiloes['clearNavigationParams'] = sizing;
                        option['__closure'] = kiloes;
                        kiloes = 4258427482717.0;
                        option['__workletHash'] = kiloes;
                        michal = _closure1_slot19;
                        option['__initData'] = michal;
                        source = 'respect-motion-settings';
                        sequen = romeon;
                        vacuum = 0;
                        ctrled = foxtra;
                        update = option;
                        option = sequen[yankee](vacuum, ctrled, source, update, echoed);
                        michal = 150;
                        michal = verify.bind(offset)(michal, option);
                        michal = oscard.bind(golfie)(report, michal);
                        michal = zuuluu.bind(tangon)(michal);
                        _fun00020_ip = 351; continue _fun00019;
 341:
                        michal = _closure3_slot4;
                        entity = undefined;
                        entity = michal.bind(entity)();
 351:
                        entity = undefined;
                        return entity;
                    }
                };
                michal = tangon.bind(report)(michal, zuuluu);
                return entity;
            };
            entity = entity.bind(golfie)(tangon, report, oscard);
            entity = {};
            entity['data'] = tangon;
            entity['unreadBarsData'] = zuuluu;
            entity['estimateContentHeight'] = michal;
            return entity;
        }
    };
    zuuluu['useChannelListData'] = michal;
    return entity;
})();