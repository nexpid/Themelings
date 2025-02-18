// app/modules/channel_list_v2/native/unread_bars/ChannelsUnreadBarsFastList.tsx
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
    entity = function(argFoo) { // Original name: shouldSkipSection
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot2;
            report = 12;
            zuuluu = zuuluu[report];
            tangon = undefined;
            zuuluu = oscard.bind(tangon)(zuuluu);
            zuuluu = zuuluu.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(zuuluu !== michal)) { _fun00008_ip = 69; continue _fun00007 }
 38:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[report];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.SECTION_INDEX_GUILD_ACTIONS;
            if(!(entity !== michal)) { _fun00008_ip = 69; continue _fun00007 }
 65:
            entity = false;
            return entity;
 69:
            entity = true;
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo, argBar, argBaz, argCor) { // Original name: checkHasMentionOrUnread
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            report = argFoo;
            michal = argCor;
            tangon = report.getChannelFromSectionRow;
            zuuluu = argBar;
            entity = argBaz;
            entity = tangon.bind(report)(zuuluu, entity);
            yankee = null;
            if(!(yankee != entity)) { _fun00010_ip = 380; continue _fun00009 }
 33:
            zuuluu = entity.channel;
            entity = _closure1_slot16;
            entity = entity.MENTION;
            if(!(michal !== entity)) { _fun00010_ip = 267; continue _fun00009 }
 58:
            entity = _closure1_slot16;
            entity = entity.UNREAD;
            entity = michal === entity;
            if(!entity) { _fun00010_ip = 265; continue _fun00009 }
 78:
            golfie = zuuluu.record;
            tangon = _closure1_slot20;
            michal = zuuluu.threadIds;
            verify = undefined;
            option = tangon.bind(verify)(michal);
            tangon = option.bind(verify)();
            michal = tangon.done;
            report = tangon;
            if(michal) { _fun00010_ip = 179; continue _fun00009 }
 116:
            romeon = report.value;
            tangon = _closure1_slot7;
            michal = tangon.getChannel;
            michal = michal.bind(tangon)(romeon);
            if(!(yankee != michal)) { _fun00010_ip = 164; continue _fun00009 }
 139:
            romeon = _closure1_slot9;
            tangon = romeon.hasUnread;
            michal = michal.id;
            tangon = tangon.bind(romeon)(michal);
            michal = true;
            if(tangon) { _fun00010_ip = 262; continue _fun00009 }
 164:
            romeon = option.bind(verify)();
            tangon = romeon.done;
            report = romeon;
            if(!tangon) { _fun00010_ip = 116; continue _fun00009 }
 179:
            tangon = golfie.isGuildVocal;
            tangon = tangon.bind(golfie)();
            tangon = !tangon;
            if(!tangon) { _fun00010_ip = 204; continue _fun00009 }
 195:
            report = zuuluu.isMuted;
            tangon = !report;
 204:
            if(!tangon) { _fun00010_ip = 227; continue _fun00009 }
 207:
            option = _closure1_slot9;
            oscard = option.hasUnread;
            report = golfie.id;
            tangon = oscard.bind(option)(report);
 227:
            if(!tangon) { _fun00010_ip = 259; continue _fun00009 }
 230:
            oscard = _closure1_slot10;
            report = oscard.resolveUnreadSetting;
            oscard = report.bind(oscard)(golfie);
            report = _closure1_slot12;
            report = report.ALL_MESSAGES;
            tangon = oscard === report;
 259:
            michal = tangon;
 262:
            entity = michal;
 265:
            _fun00010_ip = 378; continue _fun00009;
 267:
            report = _closure1_slot9;
            tangon = report.getMentionCount;
            michal = zuuluu.id;
            michal = tangon.bind(report)(michal);
            verify = 0;
            tangon = michal > verify;
            michal = true;
            if(tangon) { _fun00010_ip = 375; continue _fun00009 }
 298:
            tangon = _closure1_slot20;
            zuuluu = zuuluu.threadIds;
            golfie = undefined;
            oscard = tangon.bind(golfie)(zuuluu);
            tangon = oscard.bind(golfie)();
            zuuluu = tangon.done;
            michal = false;
            if(zuuluu) { _fun00010_ip = 375; continue _fun00009 }
 329:
            romeon = tangon.value;
            yankee = _closure1_slot9;
            zuuluu = yankee.getMentionCount;
            zuuluu = zuuluu.bind(yankee)(romeon);
            zuuluu = zuuluu > verify;
            michal = true;
            if(zuuluu) { _fun00010_ip = 375; continue _fun00009 }
 358:
            yankee = oscard.bind(golfie)();
            zuuluu = yankee.done;
            tangon = yankee;
            michal = false;
            if(!zuuluu) { _fun00010_ip = 329; continue _fun00009 }
 375:
            entity = michal;
 378:
            return entity;
 380:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: findFirstOrLastUnreadItem
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = argFoo;
            output = argBar;
            tangon = argBaz;
            golfie = output.id;
            report = _closure1_slot8;
            zuuluu = report.getMentionCount;
            zuuluu = zuuluu.bind(report)(golfie);
            sizing = 0;
            report = zuuluu > sizing;
            oscard = _closure1_slot8;
            zuuluu = oscard.hasUnread;
            zuuluu = zuuluu.bind(oscard)(golfie);
            if(report) { _fun00012_ip = 73; continue _fun00011 }
 56:
            kiloes = null;
            if(!zuuluu) { _fun00012_ip = 71; continue _fun00011 }
 61:
            zuuluu = _closure1_slot16;
            kiloes = zuuluu.UNREAD;
 71:
            _fun00012_ip = 83; continue _fun00011;
 73:
            zuuluu = _closure1_slot16;
            kiloes = zuuluu.MENTION;
 83:
            backup = null;
            if(!(backup != kiloes)) { _fun00012_ip = 1228; continue _fun00011 }
 92:
            zuuluu = michal.containerSize;
            if(!(sizing !== zuuluu)) { _fun00012_ip = 1222; continue _fun00011 }
 105:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 13;
            zuuluu = oscard[zuuluu];
            foxtra = undefined;
            report = report.bind(foxtra)(zuuluu);
            zuuluu = report.getFontScale;
            report = zuuluu.bind(report)();
            zuuluu = _closure1_slot11;
            report = zuuluu.bind(foxtra)(report);
            zuuluu = 2;
            golfie = report / zuuluu;
            report = michal.scrollPosValue;
            zuuluu = report.get;
            report = zuuluu.bind(report)();
            oscard = michal.getSectionItemFromPosition;
            zuuluu = tangon + report;
            zuuluu = zuuluu + golfie;
            zuuluu = oscard.bind(michal)(zuuluu);
            oscard = zuuluu.item;
            golfie = backup == oscard;
            zuuluu = undefined;
            if(golfie) { _fun00012_ip = 207; continue _fun00011 }
 201:
            zuuluu = oscard.layoutStart;
 207:
            option = report;
            if(!(backup != zuuluu)) { _fun00012_ip = 217; continue _fun00011 }
 214:
            option = zuuluu;
 217:
            zuuluu = michal.containerSize;
            zuuluu = option + zuuluu;
            golfie = zuuluu - tangon;
            echoed = {'section': 4294967295, 'item': 4294967295};
            romeon = -1;
            zuuluu = _closure1_slot20;
            michal = michal.state;
            michal = michal.items;
            oscard = zuuluu.bind(foxtra)(michal);
            zuuluu = oscard.bind(foxtra)();
            michal = zuuluu.done;
            report = 14;
            tangon = zuuluu;
            zuuluu = null;
            yankee = null;
            if(michal) { _fun00012_ip = 565; continue _fun00011 }
 292:
            offset = tangon.value;
            michal = offset.layoutStart;
            verify = zuuluu;
            if(!(!(michal < option))) { _fun00012_ip = 541; continue _fun00011 }
 313:
            result = offset.type;
            update = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[report];
            michal = update.bind(foxtra)(michal);
            michal = michal.FastListItemTypes;
            michal = michal.ITEM;
            if(!(result !== michal)) { _fun00012_ip = 395; continue _fun00011 }
 351:
            result = offset.type;
            update = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[report];
            michal = update.bind(foxtra)(michal);
            michal = michal.FastListItemTypes;
            michal = michal.SECTION;
            verify = zuuluu;
            if(!(result === michal)) { _fun00012_ip = 541; continue _fun00011 }
 395:
            michal = offset.layoutStart;
            yankee = zuuluu;
            if(!(!(michal > golfie))) { _fun00012_ip = 565; continue _fun00011 }
 411:
            michal = echoed.section;
            if(!(romeon === michal)) { _fun00012_ip = 442; continue _fun00011 }
 420:
            michal = offset.section;
            echoed['section'] = michal;
            michal = offset.item;
            echoed['item'] = michal;
 442:
            result = offset.type;
            update = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[report];
            michal = update.bind(foxtra)(michal);
            michal = michal.FastListItemTypes;
            michal = michal.ITEM;
            verify = offset;
            if(!(result === michal)) { _fun00012_ip = 541; continue _fun00011 }
 483:
            result = _closure1_slot22;
            michal = offset.section;
            michal = result.bind(foxtra)(michal);
            verify = zuuluu;
            if(michal) { _fun00012_ip = 541; continue _fun00011 }
 503:
            update = _closure1_slot23;
            variable39 = offset.section;
            variable38 = offset.item;
            variable41 = undefined;
            variable40 = output;
            variable37 = kiloes;
            michal = variable41[update](variable40, variable39, variable38, variable37, variable36);
            verify = offset;
            if(!michal) { _fun00012_ip = 541; continue _fun00011 }
 535:
            michal = _closure1_slot17;
            return michal;
 541:
            offset = oscard.bind(foxtra)();
            michal = offset.done;
            zuuluu = verify;
            tangon = offset;
            yankee = zuuluu;
            if(!michal) { _fun00012_ip = 292; continue _fun00011 }
 565:
            michal = output.getSections;
            offset = michal.bind(output)();
            michal = offset.length;
            michal = sizing < michal;
            result = false;
            golfie = 0;
            oscard = undefined;
            report = undefined;
            tangon = undefined;
            zuuluu = undefined;
            if(!michal) { _fun00012_ip = 843; continue _fun00011 }
 602:
            michal = _closure1_slot22;
            vacuum = michal.bind(foxtra)(golfie);
            michal = golfie;
            ctrled = result;
            source = tangon;
            update = zuuluu;
            if(vacuum) { _fun00012_ip = 819; continue _fun00011 }
 629:
            config = offset[michal];
            cntext = sizing < config;
            record = 0;
            vacuum = result;
            sequen = 0;
            if(!cntext) { _fun00012_ip = 801; continue _fun00011 }
 650:
            cntext = echoed.section;
            cntext = michal > cntext;
            papara = echoed.section;
            status = michal === papara;
            papara = echoed.item;
            target = record >= papara;
            papara = record;
            vacuum = true;
            sequen = papara;
            tangon = status;
            zuuluu = target;
            if(cntext) { _fun00012_ip = 801; continue _fun00011 }
 694:
            if(!status) { _fun00012_ip = 711; continue _fun00011 }
 697:
            vacuum = true;
            sequen = papara;
            tangon = status;
            zuuluu = target;
            if(zuuluu) { _fun00012_ip = 801; continue _fun00011 }
 711:
            cntext = _closure1_slot23;
            variable41 = undefined;
            variable40 = output;
            variable39 = michal;
            variable38 = papara;
            variable37 = kiloes;
            cntext = variable41[cntext](variable40, variable39, variable38, variable37, variable36);
            if(cntext) { _fun00012_ip = 757; continue _fun00011 }
 736:
            record = papara + 1;
            vacuum = result;
            tangon = status;
            zuuluu = target;
            sequen = record;
            if(sequen < config) { _fun00012_ip = 650; continue _fun00011 }
 755:
            _fun00012_ip = 801; continue _fun00011;
 757:
            record = {};
            cntext = {};
            cntext['section'] = michal;
            cntext['row'] = papara;
            papara = _closure1_slot16;
            papara = papara.MENTION;
            papara = kiloes === papara;
            cntext['isMention'] = papara;
            record['beforeItem'] = cntext;
            record['afterItem'] = backup;
            return record;
 801:
            ctrled = vacuum;
            report = sequen;
            source = tangon;
            update = zuuluu;
            oscard = config;
            if(ctrled) { _fun00012_ip = 843; continue _fun00011 }
 819:
            golfie = michal + 1;
            michal = offset.length;
            result = ctrled;
            tangon = source;
            zuuluu = update;
            if(golfie < michal) { _fun00012_ip = 602; continue _fun00011 }
 843:
            michal = offset.length;
            golfie = 1;
            oscard = michal - golfie;
            verify = false;
            report = undefined;
            tangon = undefined;
            zuuluu = undefined;
            michal = undefined;
            if(!(oscard >= sizing)) { _fun00012_ip = 1216; continue _fun00011 }
 872:
            result = _closure1_slot22;
            vacuum = result.bind(foxtra)(oscard);
            ctrled = oscard;
            source = verify;
            update = tangon;
            echoed = zuuluu;
            result = michal;
            if(vacuum) { _fun00012_ip = 1194; continue _fun00011 }
 902:
            vacuum = offset[ctrled];
            limora = vacuum - golfie;
            sierra = tangon;
            target = zuuluu;
            papara = michal;
            vacuum = verify;
            record = sierra;
            config = target;
            sequen = papara;
            cntext = limora;
            if(!(cntext >= sizing)) { _fun00012_ip = 1176; continue _fun00011 }
 941:
            status = limora;
            if(!(backup != yankee)) { _fun00012_ip = 1062; continue _fun00011 }
 948:
            whisks = yankee.section;
            variable36 = ctrled < whisks;
            whisks = yankee.section;
            quebec = ctrled === whisks;
            whisks = yankee.item;
            equals = romeon === whisks;
            whisks = yankee.item;
            whisks = status <= whisks;
            vacuum = true;
            cntext = status;
            record = quebec;
            config = equals;
            sequen = whisks;
            if(variable36) { _fun00012_ip = 1176; continue _fun00011 }
 1004:
            sierra = quebec;
            target = equals;
            papara = whisks;
            if(!quebec) { _fun00012_ip = 1062; continue _fun00011 }
 1016:
            vacuum = true;
            cntext = status;
            record = quebec;
            config = equals;
            sequen = whisks;
            if(equals) { _fun00012_ip = 1176; continue _fun00011 }
 1036:
            sierra = quebec;
            target = equals;
            papara = whisks;
            vacuum = true;
            cntext = status;
            record = sierra;
            config = target;
            sequen = papara;
            if(sequen) { _fun00012_ip = 1176; continue _fun00011 }
 1062:
            whisks = _closure1_slot23;
            variable41 = undefined;
            variable40 = output;
            variable39 = ctrled;
            variable38 = status;
            variable37 = kiloes;
            whisks = variable41[whisks](variable40, variable39, variable38, variable37, variable36);
            variable36 = sierra;
            quebec = target;
            equals = papara;
            if(whisks) { _fun00012_ip = 1132; continue _fun00011 }
 1096:
            limora = status - 1;
            sierra = variable36;
            target = quebec;
            papara = equals;
            vacuum = verify;
            record = sierra;
            config = target;
            sequen = papara;
            cntext = limora;
            if(cntext >= sizing) { _fun00012_ip = 941; continue _fun00011 }
 1130:
            _fun00012_ip = 1176; continue _fun00011;
 1132:
            papara = {};
            target = {};
            target['section'] = ctrled;
            target['row'] = status;
            status = _closure1_slot16;
            status = status.MENTION;
            status = kiloes === status;
            target['isMention'] = status;
            papara['afterItem'] = target;
            papara['beforeItem'] = backup;
            return papara;
 1176:
            source = vacuum;
            report = cntext;
            update = record;
            echoed = config;
            result = sequen;
            if(source) { _fun00012_ip = 1216; continue _fun00011 }
 1194:
            oscard = ctrled - 1;
            verify = source;
            tangon = update;
            zuuluu = echoed;
            michal = result;
            if(oscard >= sizing) { _fun00012_ip = 872; continue _fun00011 }
 1216:
            michal = _closure1_slot17;
            return michal;
 1222:
            michal = _closure1_slot17;
            return michal;
 1228:
            entity = _closure1_slot17;
            return entity;
        }
    };
    var _closure1_slot24 = entity;
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
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    verify = tangon.View;
    var _closure1_slot5 = verify;
    offset = tangon.StyleSheet;
    tangon = 3;
    tangon = oscard[tangon];
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
    tangon = tangon.getScaledChannelRowHeight;
    var _closure1_slot11 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.UnreadSetting;
    var _closure1_slot12 = tangon;
    tangon = 10;
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.jsx;
    var _closure1_slot13 = option;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot14 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = offset.absoluteFillObject;
    tangon['wrapper'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot15 = tangon;
    tangon = {};
    option = 'mention';
    tangon['MENTION'] = option;
    option = 'unread';
    tangon['UNREAD'] = option;
    var _closure1_slot16 = tangon;
    tangon = {'beforeItem': null, 'afterItem': null};
    var _closure1_slot17 = tangon;
    tangon = {};
    option = 'function ChannelsUnreadBarsFastListTsx1(){const{scrollPosValue}=this.__closure;return scrollPosValue.get();}';
    tangon['code'] = option;
    var _closure1_slot18 = tangon;
    tangon = {};
    option = 'function ChannelsUnreadBarsFastListTsx2(position,lastPosition){const{runOnJS,debouncedUpdate}=this.__closure;if(position!==lastPosition){runOnJS(debouncedUpdate)();}}';
    tangon['code'] = option;
    var _closure1_slot19 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: ChannelUnreadBarsComponent
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            michal = argFoo;
            yankee = michal.fastList;
            var _closure2_slot0 = yankee;
            kiloes = michal.guild;
            zuuluu = michal.guildChannels;
            var _closure2_slot1 = zuuluu;
            verify = michal.headerHeight;
            var _closure2_slot2 = verify;
            michal = zuuluu.id;
            var _closure2_slot3 = michal;
            backup = _closure1_slot4;
            report = backup.useRef;
            tangon = -1;
            tangon = report.bind(backup)(tangon);
            var _closure2_slot4 = tangon;
            tangon = backup.useRef;
            romeon = null;
            tangon = tangon.bind(backup)(romeon);
            var _closure2_slot5 = tangon;
            report = backup.useState;
            tangon = function() {
                report = _closure1_slot24;
                tangon = _closure2_slot0;
                zuuluu = _closure2_slot1;
                michal = _closure2_slot2;
                entity = undefined;
                entity = report.bind(entity)(tangon, zuuluu, michal);
                return entity;
            };
            option = report.bind(backup)(tangon);
            golfie = _closure1_slot3;
            tangon = undefined;
            report = 2;
            golfie = golfie.bind(tangon)(option, report);
            offset = 0;
            report = golfie[offset];
            result = report.beforeItem;
            var _closure2_slot6 = result;
            foxtra = report.afterItem;
            var _closure2_slot7 = foxtra;
            report = 1;
            report = golfie[report];
            var _closure2_slot8 = report;
            golfie = backup.useMemo;
            report = new Array(3);
            report[0] = yankee;
            report[1] = zuuluu;
            report[2] = verify;
            zuuluu = function() {
                michal = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 15;
                entity = zuuluu[entity];
                tangon = undefined;
                zuuluu = michal.bind(tangon)(entity);
                michal = function() {
                    golfie = _closure1_slot24;
                    oscard = _closure2_slot0;
                    report = _closure2_slot1;
                    tangon = _closure2_slot2;
                    entity = undefined;
                    tangon = golfie.bind(entity)(oscard, report, tangon);
                    var _closure4_slot0 = tangon;
                    zuuluu = _closure2_slot8;
                    michal = function(argFoo) {
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            tangon = argFoo;
                            zuuluu = _closure4_slot0;
                            entity = tangon;
                            if(!(tangon !== zuuluu)) { _fun00016_ip = 169; continue _fun00015 }
 20:
                            oscard = _closure1_slot1;
                            zuuluu = _closure1_slot2;
                            option = 16;
                            zuuluu = zuuluu[option];
                            golfie = undefined;
                            offset = oscard.bind(golfie)(zuuluu);
                            oscard = tangon.afterItem;
                            zuuluu = null;
                            yankee = zuuluu != oscard;
                            verify = undefined;
                            if(!yankee) { _fun00016_ip = 65; continue _fun00015 }
 62:
                            verify = oscard;
 65:
                            oscard = _closure4_slot0;
                            yankee = oscard.afterItem;
                            romeon = zuuluu != yankee;
                            oscard = undefined;
                            if(!romeon) { _fun00016_ip = 87; continue _fun00015 }
 84:
                            oscard = yankee;
 87:
                            oscard = offset.bind(golfie)(verify, oscard);
                            if(!oscard) { _fun00016_ip = 165; continue _fun00015 }
 96:
                            oscard = _closure1_slot1;
                            report = _closure1_slot2;
                            report = report[option];
                            oscard = oscard.bind(golfie)(report);
                            option = tangon.beforeItem;
                            verify = zuuluu != option;
                            report = undefined;
                            if(!verify) { _fun00016_ip = 131; continue _fun00015 }
 128:
                            report = option;
 131:
                            option = _closure4_slot0;
                            option = option.beforeItem;
                            verify = zuuluu != option;
                            zuuluu = undefined;
                            if(!verify) { _fun00016_ip = 153; continue _fun00015 }
 150:
                            zuuluu = option;
 153:
                            zuuluu = oscard.bind(golfie)(report, zuuluu);
                            entity = tangon;
                            if(zuuluu) { _fun00016_ip = 169; continue _fun00015 }
 165:
                            entity = _closure4_slot0;
 169:
                            return entity;
                        }
                    };
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                entity = 100;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            echoed = golfie.bind(backup)(zuuluu, report);
            var _closure2_slot9 = echoed;
            report = backup.useEffect;
            zuuluu = new Array(2);
            zuuluu[0] = echoed;
            zuuluu[1] = michal;
            michal = function() {
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                zuuluu = 17;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                zuuluu = report.bind(zuuluu)(tangon);
                report = zuuluu.BatchedStoreListener;
                zuuluu = _closure1_slot8;
                tangon = new Array(2);
                tangon[0] = zuuluu;
                michal = _closure1_slot9;
                tangon[1] = michal;
                michal = report.prototype;
                zuuluu = Object.create(michal, {constructor: {value: report}});
                oscard = function() {
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        tangon = _closure2_slot3;
                        zuuluu = _closure1_slot9;
                        michal = zuuluu.getGuildUnreadsSentinel;
                        zuuluu = michal.bind(zuuluu)(tangon);
                        michal = _closure2_slot5;
                        michal = michal.current;
                        michal = tangon === michal;
                        if(!michal) { _fun00018_ip = 54; continue _fun00017 }
 41:
                        report = _closure2_slot4;
                        report = report.current;
                        michal = zuuluu === report;
 54:
                        if(michal) { _fun00018_ip = 87; continue _fun00017 }
 57:
                        michal = _closure2_slot5;
                        michal['current'] = tangon;
                        michal = _closure2_slot4;
                        michal['current'] = zuuluu;
                        michal = _closure2_slot9;
                        entity = undefined;
                        entity = michal.bind(entity)();
 87:
                        entity = undefined;
                        return entity;
                    }
                };
                option = zuuluu;
                golfie = tangon;
                michal = new option[report](golfie, oscard, report);
                tangon = michal instanceof Object ? michal : zuuluu;
                var _closure3_slot0 = tangon;
                zuuluu = tangon.attach;
                michal = 'channel-list-unread-bars';
                michal = zuuluu.bind(tangon)(michal);
                entity = function() {
                    michal = _closure3_slot0;
                    entity = michal.detach;
                    entity = entity.bind(michal)();
                    entity = undefined;
                    return entity;
                };
                return entity;
            };
            michal = report.bind(backup)(michal, zuuluu);
            output = yankee.scrollPosValue;
            var _closure2_slot10 = output;
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            update = 18;
            michal = report[update];
            sizing = zuuluu.bind(tangon)(michal);
            option = sizing.useAnimatedReaction;
            golfie = function() { // Original name: E
                michal = _closure2_slot10;
                entity = michal.get;
                entity = entity.bind(michal)();
                return entity;
            };
            michal = {};
            michal['scrollPosValue'] = output;
            golfie['__closure'] = michal;
            michal = 13585715584001.0;
            golfie['__workletHash'] = michal;
            michal = _closure1_slot18;
            golfie['__initData'] = michal;
            michal = function(argFoo, argBar) { // Original name: k
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    michal = argFoo;
                    entity = argBar;
                    if(!(michal !== entity)) { _fun00020_ip = 56; continue _fun00019 }
 10:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 18;
                    entity = michal[entity];
                    michal = undefined;
                    tangon = zuuluu.bind(michal)(entity);
                    zuuluu = tangon.runOnJS;
                    entity = _closure2_slot9;
                    entity = zuuluu.bind(tangon)(entity);
                    entity = entity.bind(michal)();
 56:
                    entity = undefined;
                    return entity;
                }
            };
            output = {};
            update = report[update];
            update = zuuluu.bind(tangon)(update);
            update = update.runOnJS;
            output['runOnJS'] = update;
            output['debouncedUpdate'] = echoed;
            michal['__closure'] = output;
            output = 14932911601944.0;
            michal['__workletHash'] = output;
            output = _closure1_slot19;
            michal['__initData'] = output;
            michal = option.bind(sizing)(golfie, michal);
            michal = _closure1_slot15;
            option = michal.bind(tangon)();
            var _closure2_slot11 = option;
            golfie = _closure1_slot1;
            michal = 19;
            michal = report[michal];
            michal = golfie.bind(tangon)(michal);
            michal = michal.bind(tangon)(kiloes);
            output = michal.bannerWidth;
            var _closure2_slot12 = output;
            sizing = michal.listBottom;
            var _closure2_slot13 = sizing;
            michal = 20;
            michal = report[michal];
            michal = golfie.bind(tangon)(michal);
            michal = michal.bind(tangon)();
            var _closure2_slot14 = michal;
            kiloes = backup.useMemo;
            echoed = option.wrapper;
            option = new Array(4);
            option[0] = echoed;
            option[1] = output;
            option[2] = sizing;
            option[3] = michal;
            michal = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    entity = _closure2_slot11;
                    michal = entity.wrapper;
                    entity = new Array(2);
                    entity[0] = michal;
                    michal = {};
                    zuuluu = _closure2_slot12;
                    michal['width'] = zuuluu;
                    report = _closure2_slot14;
                    zuuluu = 0;
                    if(report) { _fun00022_ip = 44; continue _fun00021 }
 40:
                    zuuluu = _closure2_slot13;
 44:
                    michal['bottom'] = zuuluu;
                    entity[1] = michal;
                    return entity;
                }
            };
            option = kiloes.bind(backup)(michal, option);
            if(!(romeon != result)) { _fun00014_ip = 515; continue _fun00013 }
 502:
            michal = result.isMention;
            sizing = 'before';
            if(michal) { _fun00014_ip = 565; continue _fun00013 }
 515:
            if(!(romeon != foxtra)) { _fun00014_ip = 532; continue _fun00013 }
 519:
            kiloes = foxtra.isMention;
            michal = 'after';
            if(kiloes) { _fun00014_ip = 562; continue _fun00013 }
 532:
            output = romeon != result;
            kiloes = 'before';
            if(output) { _fun00014_ip = 559; continue _fun00013 }
 543:
            echoed = romeon != foxtra;
            output = null;
            if(!echoed) { _fun00014_ip = 556; continue _fun00013 }
 552:
            output = 'after';
 556:
            kiloes = output;
 559:
            michal = kiloes;
 562:
            sizing = michal;
 565:
            michal = 17;
            michal = report[michal];
            output = zuuluu.bind(tangon)(michal);
            kiloes = output.useStateFromStores;
            michal = _closure1_slot6;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                entity = _closure1_slot6;
                entity = entity.useReducedMotion;
                return entity;
            };
            kiloes = kiloes.bind(output)(zuuluu, michal);
            var _closure2_slot15 = kiloes;
            output = backup.useCallback;
            zuuluu = new Array(3);
            zuuluu[0] = result;
            zuuluu[1] = kiloes;
            zuuluu[2] = yankee;
            michal = function() {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    michal = _closure2_slot6;
                    entity = null;
                    if(!(entity != michal)) { _fun00024_ip = 132; continue _fun00023 }
 13:
                    zuuluu = _closure1_slot0;
                    golfie = _closure1_slot2;
                    michal = 21;
                    michal = golfie[michal];
                    oscard = undefined;
                    zuuluu = zuuluu.bind(oscard)(michal);
                    michal = zuuluu.triggerHapticFeedback;
                    report = _closure1_slot1;
                    entity = 22;
                    entity = golfie[entity];
                    entity = report.bind(oscard)(entity);
                    entity = entity.IMPACT_LIGHT;
                    entity = michal.bind(zuuluu)(entity);
                    zuuluu = _closure2_slot0;
                    michal = zuuluu.scrollToLocation;
                    entity = {};
                    report = _closure2_slot6;
                    oscard = report.section;
                    entity['section'] = oscard;
                    report = report.row;
                    entity['item'] = report;
                    tangon = _closure2_slot15;
                    tangon = !tangon;
                    entity['animated'] = tangon;
                    tangon = 'center';
                    entity['orientation'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 132:
                    entity = undefined;
                    return entity;
                }
            };
            output = output.bind(backup)(michal, zuuluu);
            zuuluu = backup.useCallback;
            michal = new Array(3);
            michal[0] = foxtra;
            michal[1] = kiloes;
            michal[2] = yankee;
            entity = function() {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    michal = _closure2_slot7;
                    entity = null;
                    if(!(entity != michal)) { _fun00026_ip = 132; continue _fun00025 }
 13:
                    zuuluu = _closure1_slot0;
                    golfie = _closure1_slot2;
                    michal = 21;
                    michal = golfie[michal];
                    oscard = undefined;
                    zuuluu = zuuluu.bind(oscard)(michal);
                    michal = zuuluu.triggerHapticFeedback;
                    report = _closure1_slot1;
                    entity = 22;
                    entity = golfie[entity];
                    entity = report.bind(oscard)(entity);
                    entity = entity.IMPACT_LIGHT;
                    entity = michal.bind(zuuluu)(entity);
                    zuuluu = _closure2_slot0;
                    michal = zuuluu.scrollToLocation;
                    entity = {};
                    report = _closure2_slot7;
                    oscard = report.section;
                    entity['section'] = oscard;
                    report = report.row;
                    entity['item'] = report;
                    tangon = _closure2_slot15;
                    tangon = !tangon;
                    entity['animated'] = tangon;
                    tangon = 'center';
                    entity['orientation'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 132:
                    entity = undefined;
                    return entity;
                }
            };
            backup = zuuluu.bind(backup)(entity, michal);
            zuuluu = _closure1_slot14;
            michal = _closure1_slot5;
            entity = {};
            entity['style'] = option;
            option = 'box-none';
            entity['pointerEvents'] = option;
            option = _closure1_slot13;
            kiloes = 23;
            report = report[kiloes];
            golfie = golfie.bind(tangon)(report);
            report = {};
            echoed = 'top';
            report['position'] = echoed;
            echoed = 'before';
            echoed = echoed === sizing;
            report['shown'] = echoed;
            report['onPress'] = output;
            echoed = romeon == result;
            output = undefined;
            if(echoed) { _fun00014_ip = 762; continue _fun00013 }
 756:
            output = result.isMention;
 762:
            report['isMention'] = output;
            output = yankee.scrollPosValue;
            report['scrollPosition'] = output;
            report['listPaddingTop'] = offset;
            report['headerHeight'] = verify;
            golfie = option.bind(tangon)(golfie, report);
            report = new Array(2);
            report[0] = golfie;
            option = _closure1_slot13;
            golfie = _closure1_slot1;
            oscard = _closure1_slot2;
            oscard = oscard[kiloes];
            golfie = golfie.bind(tangon)(oscard);
            oscard = {};
            kiloes = 'bottom';
            oscard['position'] = kiloes;
            kiloes = 'after';
            kiloes = kiloes === sizing;
            oscard['shown'] = kiloes;
            oscard['onPress'] = backup;
            backup = romeon == foxtra;
            romeon = undefined;
            if(backup) { _fun00014_ip = 865; continue _fun00013 }
 859:
            romeon = foxtra.isMention;
 865:
            oscard['isMention'] = romeon;
            yankee = yankee.scrollPosValue;
            oscard['scrollPosition'] = yankee;
            oscard['listPaddingTop'] = offset;
            oscard['headerHeight'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 24;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/channel_list_v2/native/unread_bars/ChannelsUnreadBarsFastList.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();