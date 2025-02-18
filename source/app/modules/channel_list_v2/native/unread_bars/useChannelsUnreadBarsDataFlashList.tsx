// app/modules/channel_list_v2/native/unread_bars/useChannelsUnreadBarsDataFlashList.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: hasMention
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.kind;
            michal = 'channel';
            if(!(michal !== zuuluu)) { _fun00002_ip = 24; continue _fun00001 }
 16:
            zuuluu = entity.threadId;
            _fun00002_ip = 34; continue _fun00001;
 24:
            entity = entity.channel;
            zuuluu = entity.id;
 34:
            michal = _closure1_slot8;
            entity = michal.getMentionCount;
            michal = entity.bind(michal)(zuuluu);
            entity = 0;
            entity = michal > entity;
            return entity;
        }
    };
    var _closure1_slot12 = entity;
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.isGuildVocalChannelType;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.UnreadSetting;
    var _closure1_slot10 = tangon;
    tangon = {'top': null, 'bottom': null};
    var _closure1_slot11 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/channel_list_v2/native/unread_bars/useChannelsUnreadBarsDataFlashList.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useChannelsUnreadBarsDataFlashList
        entity = argFoo;
        golfie = entity.guildId;
        var _closure2_slot0 = golfie;
        foxtra = entity.data;
        var _closure2_slot1 = foxtra;
        backup = entity.viewableIndices;
        var _closure2_slot2 = backup;
        verify = entity.selectedChannelId;
        var _closure2_slot3 = verify;
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        tangon = 8;
        zuuluu = oscard[tangon];
        option = undefined;
        romeon = report.bind(option)(zuuluu);
        yankee = romeon.useStateFromStores;
        zuuluu = _closure1_slot9;
        offset = new Array(1);
        offset[0] = zuuluu;
        zuuluu = function() {
            zuuluu = _closure1_slot9;
            michal = zuuluu.getMutedChannels;
            entity = _closure2_slot0;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        romeon = yankee.bind(romeon)(offset, zuuluu);
        var _closure2_slot4 = romeon;
        zuuluu = 9;
        zuuluu = oscard[zuuluu];
        yankee = report.bind(option)(zuuluu);
        offset = yankee.useShouldUseNewNotificationSystem;
        zuuluu = 'ChannelsUnreadBarsData';
        zuuluu = offset.bind(yankee)(zuuluu);
        var _closure2_slot5 = zuuluu;
        offset = oscard[tangon];
        sizing = report.bind(option)(offset);
        kiloes = sizing.useStateFromStores;
        offset = _closure1_slot5;
        yankee = new Array(1);
        yankee[0] = offset;
        offset = function() {
            michal = _closure1_slot5;
            entity = michal.getMutedThreads;
            entity = entity.bind(michal)();
            return entity;
        };
        yankee = kiloes.bind(sizing)(yankee, offset);
        var _closure2_slot6 = yankee;
        tangon = oscard[tangon];
        offset = report.bind(option)(tangon);
        oscard = offset.useStateFromStores;
        tangon = _closure1_slot8;
        report = new Array(1);
        report[0] = tangon;
        tangon = function() {
            zuuluu = _closure1_slot8;
            michal = zuuluu.getGuildUnreadsSentinel;
            entity = _closure2_slot0;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        offset = oscard.bind(offset)(report, tangon);
        report = _closure1_slot4;
        oscard = report.useRef;
        tangon = {};
        tangon['guildId'] = golfie;
        kiloes = false;
        tangon['hasComputed'] = kiloes;
        tangon = oscard.bind(report)(tangon);
        var _closure2_slot7 = tangon;
        oscard = report.useCallback;
        tangon = new Array(8);
        tangon[0] = backup;
        tangon[1] = foxtra;
        tangon[2] = romeon;
        tangon[3] = yankee;
        tangon[4] = offset;
        tangon[5] = verify;
        tangon[6] = zuuluu;
        tangon[7] = golfie;
        zuuluu = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = _closure2_slot7;
                zuuluu = entity.current;
                michal = _closure2_slot0;
                zuuluu['guildId'] = michal;
                entity = entity.current;
                update = true;
                entity['hasComputed'] = update;
                entity = _closure2_slot2;
                entity = entity.length;
                echoed = 0;
                if(!(echoed !== entity)) { _fun00004_ip = 890; continue _fun00003 }
 53:
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                michal = 10;
                report = tangon[michal];
                result = undefined;
                golfie = zuuluu.bind(result)(report);
                oscard = golfie.memoize;
                report = function(argFoo) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        michal = argFoo;
                        option = _closure2_slot4;
                        report = _closure2_slot6;
                        golfie = _closure2_slot5;
                        zuuluu = michal.kind;
                        entity = 'thread';
                        if(!(entity !== zuuluu)) { _fun00006_ip = 179; continue _fun00005 }
 34:
                        oscard = _closure1_slot6;
                        entity = michal.channel;
                        entity = entity.type;
                        tangon = undefined;
                        entity = oscard.bind(tangon)(entity);
                        if(entity) { _fun00006_ip = 168; continue _fun00005 }
 61:
                        oscard = option.has;
                        entity = michal.channel;
                        entity = entity.id;
                        oscard = oscard.bind(option)(entity);
                        entity = false;
                        if(oscard) { _fun00006_ip = 255; continue _fun00005 }
 89:
                        verify = _closure1_slot8;
                        option = verify.hasUnread;
                        oscard = michal.channel;
                        oscard = oscard.id;
                        option = option.bind(verify)(oscard);
                        oscard = option;
                        if(!golfie) { _fun00006_ip = 163; continue _fun00005 }
 120:
                        golfie = option;
                        if(!option) { _fun00006_ip = 160; continue _fun00005 }
 126:
                        offset = _closure1_slot9;
                        verify = offset.resolveUnreadSetting;
                        option = michal.channel;
                        verify = verify.bind(offset)(option);
                        option = _closure1_slot10;
                        option = option.ALL_MESSAGES;
                        golfie = verify === option;
 160:
                        oscard = golfie;
 163:
                        entity = oscard;
                        _fun00006_ip = 255; continue _fun00005;
 168:
                        zuuluu = _closure1_slot12;
                        entity = zuuluu.bind(tangon)(michal);
                        _fun00006_ip = 255; continue _fun00005;
 179:
                        tangon = report.has;
                        zuuluu = michal.threadId;
                        zuuluu = tangon.bind(report)(zuuluu);
                        entity = false;
                        if(zuuluu) { _fun00006_ip = 255; continue _fun00005 }
 200:
                        report = _closure1_slot7;
                        zuuluu = report.getChannel;
                        michal = michal.threadId;
                        zuuluu = zuuluu.bind(report)(michal);
                        michal = null;
                        michal = michal != zuuluu;
                        if(!michal) { _fun00006_ip = 252; continue _fun00005 }
 232:
                        report = _closure1_slot8;
                        tangon = report.hasUnread;
                        zuuluu = zuuluu.id;
                        michal = tangon.bind(report)(zuuluu);
 252:
                        entity = michal;
 255:
                        return entity;
                    }
                };
                output = oscard.bind(golfie)(report);
                michal = tangon[michal];
                tangon = zuuluu.bind(result)(michal);
                zuuluu = tangon.memoize;
                michal = _closure1_slot12;
                sizing = zuuluu.bind(tangon)(michal);
                michal = _closure2_slot1;
                michal = michal.length;
                golfie = echoed < michal;
                oscard = -1;
                foxtra = true;
                romeon = false;
                yankee = false;
                offset = oscard;
                verify = offset;
                option = 0;
                zuuluu = true;
                tangon = false;
                michal = false;
                kiloes = verify;
                backup = kiloes;
                if(!golfie) { _fun00004_ip = 357; continue _fun00003 }
 173:
                golfie = _closure2_slot1;
                status = golfie[option];
                target = sizing.bind(result)(status);
                golfie = foxtra;
                if(!foxtra) { _fun00004_ip = 195; continue _fun00003 }
 192:
                golfie = target;
 195:
                if(!golfie) { _fun00004_ip = 200; continue _fun00003 }
 198:
                foxtra = false;
 200:
                vacuum = _closure2_slot2;
                ctrled = vacuum.includes;
                golfie = status.index;
                golfie = ctrled.bind(vacuum)(golfie);
                record = foxtra;
                config = romeon;
                sequen = yankee;
                vacuum = offset;
                ctrled = verify;
                if(!golfie) { _fun00004_ip = 308; continue _fun00003 }
 237:
                cntext = offset;
                if(!(oscard === offset)) { _fun00004_ip = 249; continue _fun00003 }
 244:
                cntext = status.index;
 249:
                papara = status.index;
                golfie = verify;
                if(!(papara > verify)) { _fun00004_ip = 266; continue _fun00003 }
 261:
                golfie = status.index;
 266:
                papara = !romeon;
                if(romeon) { _fun00004_ip = 277; continue _fun00003 }
 272:
                papara = output.bind(result)(status);
 277:
                if(!papara) { _fun00004_ip = 282; continue _fun00003 }
 280:
                romeon = true;
 282:
                papara = !yankee;
                if(yankee) { _fun00004_ip = 291; continue _fun00003 }
 288:
                papara = target;
 291:
                if(!papara) { _fun00004_ip = 296; continue _fun00003 }
 294:
                yankee = true;
 296:
                sequen = yankee;
                config = romeon;
                vacuum = cntext;
                ctrled = golfie;
 308:
                option = option + 1;
                golfie = _closure2_slot1;
                golfie = golfie.length;
                romeon = config;
                yankee = sequen;
                offset = vacuum;
                verify = ctrled;
                foxtra = record;
                zuuluu = foxtra;
                tangon = romeon;
                michal = yankee;
                kiloes = offset;
                backup = verify;
                if(option < golfie) { _fun00004_ip = 173; continue _fun00003 }
 357:
                if(!(oscard !== kiloes)) { _fun00004_ip = 884; continue _fun00003 }
 364:
                if(!(oscard !== backup)) { _fun00004_ip = 884; continue _fun00003 }
 371:
                if(!tangon) { _fun00004_ip = 386; continue _fun00003 }
 374:
                if(zuuluu) { _fun00004_ip = 878; continue _fun00003 }
 380:
                if(michal) { _fun00004_ip = 878; continue _fun00003 }
 386:
                michal = _closure2_slot1;
                michal = michal.length;
                ctrled = echoed < michal;
                zuuluu = null;
                foxtra = 'thread';
                romeon = null;
                yankee = null;
                offset = false;
                golfie = false;
                echoed = 0;
                tangon = undefined;
                michal = undefined;
                verify = null;
                oscard = null;
                option = false;
                report = false;
                if(!ctrled) { _fun00004_ip = 810; continue _fun00003 }
 433:
                ctrled = _closure2_slot1;
                target = ctrled[echoed];
                ctrled = target.kind;
                if(!(foxtra !== ctrled)) { _fun00004_ip = 470; continue _fun00003 }
 450:
                ctrled = target.channel;
                vacuum = ctrled.id;
                ctrled = _closure2_slot3;
                papara = vacuum === ctrled;
                _fun00004_ip = 484; continue _fun00003;
 470:
                vacuum = target.threadId;
                ctrled = _closure2_slot3;
                papara = vacuum === ctrled;
 484:
                config = romeon;
                sequen = yankee;
                vacuum = offset;
                ctrled = golfie;
                cntext = tangon;
                record = michal;
                if(papara) { _fun00004_ip = 716; continue _fun00003 }
 508:
                papara = target.index;
                if(!(papara < kiloes)) { _fun00004_ip = 528; continue _fun00003 }
 517:
                papara = output.bind(result)(target);
                if(papara) { _fun00004_ip = 651; continue _fun00003 }
 528:
                papara = target.index;
                config = romeon;
                sequen = yankee;
                vacuum = offset;
                ctrled = golfie;
                cntext = tangon;
                record = michal;
                if(!(papara > backup)) { _fun00004_ip = 716; continue _fun00003 }
 558:
                papara = output.bind(result)(target);
                config = romeon;
                sequen = yankee;
                vacuum = offset;
                ctrled = golfie;
                cntext = tangon;
                record = michal;
                if(!papara) { _fun00004_ip = 716; continue _fun00003 }
 587:
                papara = sizing.bind(result)(target);
                sierra = zuuluu == yankee;
                if(sierra) { _fun00004_ip = 602; continue _fun00003 }
 599:
                sierra = papara;
 602:
                status = yankee;
                if(!sierra) { _fun00004_ip = 611; continue _fun00003 }
 608:
                status = target;
 611:
                config = romeon;
                sequen = status;
                vacuum = offset;
                ctrled = golfie;
                cntext = tangon;
                record = papara;
                if(!record) { _fun00004_ip = 716; continue _fun00003 }
 632:
                config = romeon;
                sequen = status;
                vacuum = offset;
                ctrled = true;
                cntext = tangon;
                record = papara;
                _fun00004_ip = 716; continue _fun00003;
 651:
                papara = sizing.bind(result)(target);
                status = zuuluu != romeon;
                if(!status) { _fun00004_ip = 666; continue _fun00003 }
 663:
                status = !papara;
 666:
                if(!status) { _fun00004_ip = 672; continue _fun00003 }
 669:
                status = offset;
 672:
                if(status) { _fun00004_ip = 678; continue _fun00003 }
 675:
                romeon = target;
 678:
                config = romeon;
                sequen = yankee;
                vacuum = offset;
                ctrled = golfie;
                cntext = papara;
                record = michal;
                if(!papara) { _fun00004_ip = 716; continue _fun00003 }
 699:
                config = romeon;
                sequen = yankee;
                vacuum = true;
                ctrled = golfie;
                cntext = papara;
                record = michal;
 716:
                papara = echoed + 1;
                target = _closure2_slot1;
                target = target.length;
                verify = config;
                oscard = sequen;
                option = vacuum;
                report = ctrled;
                if(!(papara < target)) { _fun00004_ip = 810; continue _fun00003 }
 744:
                romeon = config;
                yankee = sequen;
                offset = vacuum;
                golfie = ctrled;
                echoed = papara;
                tangon = cntext;
                michal = record;
                if(!vacuum) { _fun00004_ip = 433; continue _fun00003 }
 771:
                romeon = config;
                yankee = sequen;
                offset = vacuum;
                golfie = ctrled;
                echoed = papara;
                tangon = cntext;
                michal = record;
                verify = romeon;
                oscard = yankee;
                option = offset;
                report = golfie;
                if(!report) { _fun00004_ip = 433; continue _fun00003 }
 810:
                michal = {};
                golfie = zuuluu != verify;
                tangon = null;
                if(!golfie) { _fun00004_ip = 840; continue _fun00003 }
 821:
                golfie = {};
                verify = verify.index;
                golfie['index'] = verify;
                golfie['isMention'] = option;
                tangon = golfie;
 840:
                michal['top'] = tangon;
                tangon = zuuluu != oscard;
                zuuluu = null;
                if(!tangon) { _fun00004_ip = 872; continue _fun00003 }
 853:
                tangon = {};
                oscard = oscard.index;
                tangon['index'] = oscard;
                tangon['isMention'] = report;
                zuuluu = tangon;
 872:
                michal['bottom'] = zuuluu;
                return michal;
 878:
                michal = _closure1_slot11;
                return michal;
 884:
                entity = _closure1_slot11;
                return entity;
 890:
                entity = {'top': null, 'bottom': null};
                return entity;
            }
        };
        zuuluu = oscard.bind(report)(zuuluu, tangon);
        var _closure2_slot8 = zuuluu;
        oscard = report.useState;
        tangon = function() {
            michal = _closure2_slot8;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        };
        oscard = oscard.bind(report)(tangon);
        tangon = _closure1_slot3;
        entity = 2;
        oscard = tangon.bind(option)(oscard, entity);
        entity = 0;
        entity = oscard[entity];
        tangon = 1;
        tangon = oscard[tangon];
        var _closure2_slot9 = tangon;
        oscard = report.useCallback;
        tangon = new Array(1);
        tangon[0] = zuuluu;
        zuuluu = function() {
            zuuluu = _closure2_slot9;
            michal = _closure2_slot8;
            entity = undefined;
            michal = michal.bind(entity)();
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        oscard = oscard.bind(report)(zuuluu, tangon);
        var _closure2_slot10 = oscard;
        tangon = report.useEffect;
        zuuluu = new Array(2);
        zuuluu[0] = golfie;
        zuuluu[1] = oscard;
        michal = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = _closure2_slot0;
                zuuluu = _closure2_slot7;
                zuuluu = zuuluu.current;
                zuuluu = zuuluu.guildId;
                if(!(tangon !== zuuluu)) { _fun00008_ip = 54; continue _fun00007 }
 27:
                tangon = _closure2_slot7;
                zuuluu = {};
                report = _closure2_slot0;
                zuuluu['guildId'] = report;
                report = false;
                zuuluu['hasComputed'] = report;
                tangon['current'] = zuuluu;
 54:
                zuuluu = _closure2_slot7;
                zuuluu = zuuluu.current;
                zuuluu = zuuluu.hasComputed;
                if(zuuluu) { _fun00008_ip = 84; continue _fun00007 }
 72:
                zuuluu = _closure2_slot10;
                michal = undefined;
                zuuluu = zuuluu.bind(michal)();
                return michal;
 84:
                michal = global;
                report = michal.setTimeout;
                tangon = undefined;
                zuuluu = function() {
                    michal = _closure2_slot10;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    return entity;
                };
                michal = 50;
                michal = report.bind(tangon)(zuuluu, michal);
                var _closure3_slot0 = michal;
                entity = function() {
                    entity = global;
                    zuuluu = entity.clearTimeout;
                    michal = _closure3_slot0;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    return entity;
                };
                return entity;
            }
        };
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    zuuluu['useChannelsUnreadBarsDataFlashList'] = michal;
    return entity;
})();