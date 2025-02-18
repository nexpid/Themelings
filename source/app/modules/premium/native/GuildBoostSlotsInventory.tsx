// app/modules/premium/native/GuildBoostSlotsInventory.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    golfie = argCor;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = golfie;
    var _closure1_slot3 = oscard;
    entity = function(argFoo) { // Original name: GuildBoostSlotCooldown
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            option = michal.cooldownEndsAt;
            var _closure2_slot0 = option;
            zuuluu = _closure1_slot14;
            report = undefined;
            oscard = zuuluu.bind(report)();
            golfie = _closure1_slot4;
            tangon = golfie.useMemo;
            zuuluu = new Array(1);
            zuuluu[0] = option;
            entity = function() {
                entity = global;
                zuuluu = entity.Date;
                tangon = _closure2_slot0;
                michal = zuuluu.prototype;
                michal = Object.create(michal, {constructor: {value: zuuluu}});
                report = michal;
                entity = new report[zuuluu](tangon, zuuluu);
                entity = entity instanceof Object ? entity : michal;
                return entity;
            };
            zuuluu = tangon.bind(golfie)(entity, zuuluu);
            tangon = _closure1_slot1;
            golfie = _closure1_slot3;
            entity = 11;
            entity = golfie[entity];
            tangon = tangon.bind(report)(entity);
            entity = _closure1_slot15;
            entity = tangon.bind(report)(zuuluu, entity);
            romeon = entity.days;
            yankee = entity.hours;
            offset = entity.minutes;
            entity = zuuluu.valueOf;
            zuuluu = entity.bind(zuuluu)();
            entity = global;
            tangon = entity.Date;
            entity = tangon.now;
            entity = entity.bind(tangon)();
            zuuluu = zuuluu <= entity;
            entity = null;
            if(zuuluu) { _fun00002_ip = 276; continue _fun00001 }
 144:
            tangon = _closure1_slot11;
            golfie = _closure1_slot0;
            foxtra = _closure1_slot3;
            michal = 12;
            michal = foxtra[michal];
            michal = golfie.bind(report)(michal);
            zuuluu = michal.Text;
            michal = {'style': null, 'variant': 'text-xs/medium', 'color': 'text-muted'};
            oscard = oscard.subscriptionSlotInfoCooldown;
            michal['style'] = oscard;
            oscard = 13;
            option = foxtra[oscard];
            option = golfie.bind(report)(option);
            verify = option.intl;
            option = verify.format;
            oscard = foxtra[oscard];
            oscard = golfie.bind(report)(oscard);
            oscard = oscard.t;
            golfie = oscard.NffSHx;
            oscard = {};
            oscard['days'] = romeon;
            oscard['hours'] = yankee;
            oscard['minutes'] = offset;
            oscard = option.bind(verify)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 276:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: GuildBoostSlotsInventoryRow
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            echoed = entity.title;
            sizing = entity.subtitle;
            romeon = entity.action;
            option = entity.isLast;
            entity = _closure1_slot14;
            tangon = undefined;
            offset = entity.bind(tangon)();
            zuuluu = _closure1_slot12;
            michal = _closure1_slot5;
            entity = {};
            report = offset.subscriptionSlot;
            entity['style'] = report;
            verify = _closure1_slot12;
            oscard = _closure1_slot5;
            report = {};
            yankee = offset.subscriptionSlotInner;
            report['style'] = yankee;
            backup = _closure1_slot12;
            foxtra = _closure1_slot5;
            yankee = {};
            kiloes = offset.subscriptionSlotInfo;
            yankee['style'] = kiloes;
            result = _closure1_slot11;
            output = _closure1_slot0;
            update = _closure1_slot3;
            kiloes = 12;
            kiloes = update[kiloes];
            kiloes = output.bind(tangon)(kiloes);
            output = kiloes.Text;
            kiloes = {'style': null, 'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'interactive-active'};
            update = offset.subscriptionSlotInfoTitle;
            kiloes['style'] = update;
            kiloes['children'] = echoed;
            output = result.bind(tangon)(output, kiloes);
            kiloes = new Array(2);
            kiloes[0] = output;
            kiloes[1] = sizing;
            yankee['children'] = kiloes;
            foxtra = backup.bind(tangon)(foxtra, yankee);
            yankee = new Array(2);
            yankee[0] = foxtra;
            yankee[1] = romeon;
            report['children'] = yankee;
            oscard = verify.bind(tangon)(oscard, report);
            report = new Array(2);
            report[0] = oscard;
            oscard = null;
            if(option) { _fun00004_ip = 246; continue _fun00003 }
 220:
            verify = _closure1_slot11;
            option = _closure1_slot5;
            golfie = {};
            offset = offset.subscriptionSlotBorder;
            golfie['style'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 246:
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: GuildBoostSlot
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            michal = entity.guild;
            option = entity.guildBoostSlot;
            var _closure2_slot0 = option;
            oscard = entity.isLast;
            entity = _closure1_slot14;
            report = undefined;
            backup = entity.bind(report)();
            entity = null;
            if(!(entity != michal)) { _fun00006_ip = 465; continue _fun00005 }
 48:
            michal = option.premiumGuildSubscription;
            michal = entity != michal;
            tangon = null;
            if(!michal) { _fun00006_ip = 74; continue _fun00005 }
 63:
            michal = option.premiumGuildSubscription;
            tangon = michal.id;
 74:
            michal = entity != tangon;
            result = null;
            if(!michal) { _fun00006_ip = 114; continue _fun00005 }
 83:
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot3;
            michal = 14;
            michal = golfie[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.extractTimestamp;
            result = michal.bind(zuuluu)(tangon);
 114:
            tangon = _closure1_slot11;
            zuuluu = _closure1_slot17;
            michal = {};
            verify = entity != result;
            golfie = null;
            if(!verify) { _fun00006_ip = 229; continue _fun00005 }
 133:
            offset = _closure1_slot0;
            sizing = _closure1_slot3;
            verify = 13;
            foxtra = sizing[verify];
            foxtra = offset.bind(report)(foxtra);
            kiloes = foxtra.intl;
            foxtra = kiloes.formatToPlainString;
            verify = sizing[verify];
            verify = offset.bind(report)(verify);
            verify = verify.t;
            offset = verify.ePe+Xl;
            verify = {};
            sizing = global;
            sizing = sizing.Date;
            output = sizing.prototype;
            output = Object.create(output, {constructor: {value: sizing}});
            source = output;
            update = result;
            sizing = new source[sizing](update, echoed);
            sizing = sizing instanceof Object ? sizing : output;
            verify['date'] = sizing;
            golfie = foxtra.bind(kiloes)(offset, verify);
 229:
            michal['title'] = golfie;
            golfie = option.cooldownEndsAt;
            verify = entity != golfie;
            golfie = null;
            if(!verify) { _fun00006_ip = 275; continue _fun00005 }
 248:
            foxtra = _closure1_slot11;
            offset = _closure1_slot16;
            verify = {};
            kiloes = option.cooldownEndsAt;
            verify['cooldownEndsAt'] = kiloes;
            golfie = foxtra.bind(report)(offset, verify);
 275:
            michal['subtitle'] = golfie;
            golfie = option.isOnCooldown;
            option = golfie.bind(option)();
            golfie = null;
            if(option) { _fun00006_ip = 448; continue _fun00005 }
 298:
            offset = _closure1_slot11;
            output = _closure1_slot0;
            result = _closure1_slot3;
            option = 15;
            option = result[option];
            option = output.bind(report)(option);
            verify = option.PressableOpacity;
            option = {};
            foxtra = 'button';
            option['accessibilityRole'] = foxtra;
            romeon = function() { // Original name: onPress
                zuuluu = _closure1_slot0;
                michal = _closure1_slot3;
                entity = 16;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.openTransferModal;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            option['onPress'] = romeon;
            foxtra = _closure1_slot11;
            romeon = _closure1_slot1;
            yankee = 17;
            yankee = result[yankee];
            romeon = romeon.bind(report)(yankee);
            yankee = {};
            backup = backup.subscriptionSlotInfoTransferText;
            yankee['style'] = backup;
            backup = 13;
            kiloes = result[backup];
            kiloes = output.bind(report)(kiloes);
            sizing = kiloes.intl;
            kiloes = sizing.string;
            backup = result[backup];
            backup = output.bind(report)(backup);
            backup = backup.t;
            backup = backup.jqqLb2;
            backup = kiloes.bind(sizing)(backup);
            yankee['children'] = backup;
            yankee = foxtra.bind(report)(romeon, yankee);
            option['children'] = yankee;
            golfie = offset.bind(report)(verify, option);
 448:
            michal['action'] = golfie;
            michal['isLast'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 465:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: UnusedGuildBoostSlots
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.unusedSlots;
            entity = _closure1_slot14;
            tangon = undefined;
            echoed = entity.bind(tangon)();
            michal = zuuluu.filter;
            entity = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = argFoo;
                    report = entity.cooldownEndsAt;
                    entity = null;
                    entity = entity != report;
                    if(!entity) { _fun00010_ip = 77; continue _fun00009 }
 18:
                    michal = global;
                    zuuluu = michal.Date;
                    tangon = zuuluu.prototype;
                    tangon = Object.create(tangon, {constructor: {value: zuuluu}});
                    golfie = tangon;
                    oscard = report;
                    zuuluu = new golfie[zuuluu](oscard, report);
                    tangon = zuuluu instanceof Object ? zuuluu : tangon;
                    zuuluu = tangon.valueOf;
                    zuuluu = zuuluu.bind(tangon)();
                    tangon = michal.Date;
                    michal = tangon.now;
                    michal = michal.bind(tangon)();
                    entity = zuuluu > michal;
 77:
                    return entity;
                }
            };
            option = michal.bind(zuuluu)(entity);
            var _closure2_slot0 = option;
            michal = zuuluu.filter;
            entity = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = argFoo;
                    report = entity.cooldownEndsAt;
                    entity = null;
                    entity = entity == report;
                    if(entity) { _fun00012_ip = 77; continue _fun00011 }
 18:
                    michal = global;
                    zuuluu = michal.Date;
                    tangon = zuuluu.prototype;
                    tangon = Object.create(tangon, {constructor: {value: zuuluu}});
                    golfie = tangon;
                    oscard = report;
                    zuuluu = new golfie[zuuluu](oscard, report);
                    tangon = zuuluu instanceof Object ? zuuluu : tangon;
                    zuuluu = tangon.valueOf;
                    zuuluu = zuuluu.bind(tangon)();
                    tangon = michal.Date;
                    michal = tangon.now;
                    michal = michal.bind(tangon)();
                    entity = zuuluu <= michal;
 77:
                    return entity;
                }
            };
            output = michal.bind(zuuluu)(entity);
            zuuluu = _closure1_slot12;
            michal = _closure1_slot5;
            entity = {};
            report = echoed.unusedSlots;
            entity['style'] = report;
            report = output.length;
            romeon = 0;
            report = report > romeon;
            golfie = null;
            if(!report) { _fun00008_ip = 350; continue _fun00007 }
 101:
            offset = _closure1_slot11;
            verify = _closure1_slot17;
            report = {};
            source = _closure1_slot0;
            ctrled = _closure1_slot3;
            result = 13;
            yankee = ctrled[result];
            yankee = source.bind(tangon)(yankee);
            sizing = yankee.intl;
            backup = sizing.formatToPlainString;
            yankee = ctrled[result];
            yankee = source.bind(tangon)(yankee);
            yankee = yankee.t;
            foxtra = yankee.ewI23N;
            yankee = {};
            output = output.length;
            yankee['numSubscriptions'] = output;
            yankee = backup.bind(sizing)(foxtra, yankee);
            report['title'] = yankee;
            backup = _closure1_slot11;
            yankee = 15;
            yankee = ctrled[yankee];
            yankee = source.bind(tangon)(yankee);
            foxtra = yankee.PressableOpacity;
            yankee = {};
            sizing = 'button';
            yankee['accessibilityRole'] = sizing;
            sizing = function() { // Original name: onPress
                zuuluu = _closure1_slot0;
                michal = _closure1_slot3;
                entity = 16;
                michal = michal[entity];
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                entity = michal.openApplyBoostModal;
                entity = entity.bind(michal)();
                return entity;
            };
            yankee['onPress'] = sizing;
            output = _closure1_slot11;
            sizing = _closure1_slot1;
            kiloes = 17;
            kiloes = ctrled[kiloes];
            sizing = sizing.bind(tangon)(kiloes);
            kiloes = {};
            echoed = echoed.subscribeButtonText;
            kiloes['style'] = echoed;
            echoed = ctrled[result];
            echoed = source.bind(tangon)(echoed);
            update = echoed.intl;
            echoed = update.string;
            result = ctrled[result];
            result = source.bind(tangon)(result);
            result = result.t;
            result = result.7KyPoq;
            result = echoed.bind(update)(result);
            kiloes['children'] = result;
            kiloes = output.bind(tangon)(sizing, kiloes);
            yankee['children'] = kiloes;
            yankee = backup.bind(tangon)(foxtra, yankee);
            report['action'] = yankee;
            yankee = option.length;
            yankee = romeon === yankee;
            report['isLast'] = yankee;
            golfie = offset.bind(tangon)(verify, report);
 350:
            report = new Array(2);
            report[0] = golfie;
            golfie = option.map;
            oscard = function(argFoo, argBar) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = argFoo;
                    report = _closure1_slot11;
                    tangon = _closure1_slot17;
                    zuuluu = {};
                    golfie = _closure1_slot0;
                    verify = _closure1_slot3;
                    oscard = 13;
                    offset = verify[oscard];
                    michal = undefined;
                    offset = golfie.bind(michal)(offset);
                    yankee = offset.intl;
                    offset = yankee.formatToPlainString;
                    oscard = verify[oscard];
                    oscard = golfie.bind(michal)(oscard);
                    oscard = oscard.t;
                    verify = oscard.gDsyBw;
                    oscard = {};
                    golfie = 1;
                    oscard['numSubscriptions'] = golfie;
                    oscard = offset.bind(yankee)(verify, oscard);
                    zuuluu['title'] = oscard;
                    verify = entity.cooldownEndsAt;
                    oscard = null;
                    verify = oscard != verify;
                    if(!verify) { _fun00014_ip = 130; continue _fun00013 }
 103:
                    offset = _closure1_slot11;
                    verify = _closure1_slot16;
                    option = {};
                    yankee = entity.cooldownEndsAt;
                    option['cooldownEndsAt'] = yankee;
                    oscard = offset.bind(michal)(verify, option);
 130:
                    zuuluu['subtitle'] = oscard;
                    oscard = _closure2_slot0;
                    oscard = oscard.length;
                    golfie = oscard - golfie;
                    oscard = argBar;
                    oscard = oscard === golfie;
                    zuuluu['isLast'] = oscard;
                    entity = entity.id;
                    entity = report.bind(michal)(tangon, zuuluu, entity);
                    return entity;
                }
            };
            oscard = golfie.bind(option)(oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo) { // Original name: BoostedGuildInfo
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            foxtra = entity.guild;
            ctrled = entity.numGuildBoostSlots;
            entity = _closure1_slot14;
            report = undefined;
            result = entity.bind(report)();
            entity = null;
            michal = entity == foxtra;
            if(michal) { _fun00016_ip = 472; continue _fun00015 }
 39:
            tangon = _closure1_slot12;
            zuuluu = _closure1_slot5;
            michal = {};
            oscard = result.guildInfo;
            michal['style'] = oscard;
            option = _closure1_slot11;
            golfie = _closure1_slot5;
            oscard = {};
            verify = result.guildInfoIcon;
            oscard['style'] = verify;
            yankee = _closure1_slot11;
            sequen = _closure1_slot1;
            vacuum = _closure1_slot3;
            romeon = 18;
            verify = vacuum[romeon];
            offset = sequen.bind(report)(verify);
            verify = {};
            verify['guild'] = foxtra;
            echoed = _closure1_slot0;
            romeon = vacuum[romeon];
            romeon = echoed.bind(report)(romeon);
            romeon = romeon.GuildIconSizes;
            romeon = romeon.NORMAL;
            verify['size'] = romeon;
            romeon = false;
            verify['selected'] = romeon;
            verify = yankee.bind(report)(offset, verify);
            oscard['children'] = verify;
            golfie = option.bind(report)(golfie, oscard);
            oscard = new Array(2);
            oscard[0] = golfie;
            verify = _closure1_slot12;
            option = _closure1_slot5;
            golfie = {};
            romeon = _closure1_slot11;
            kiloes = 12;
            offset = vacuum[kiloes];
            offset = echoed.bind(report)(offset);
            yankee = offset.Text;
            offset = {'style': null, 'variant': 'heading-lg/extrabold', 'color': 'interactive-active'};
            backup = result.guildInfoName;
            offset['style'] = backup;
            foxtra = foxtra.name;
            offset['children'] = foxtra;
            yankee = romeon.bind(report)(yankee, offset);
            offset = new Array(2);
            offset[0] = yankee;
            foxtra = _closure1_slot12;
            romeon = _closure1_slot5;
            yankee = {};
            backup = result.guildInfoRowBottom;
            yankee['style'] = backup;
            update = _closure1_slot11;
            output = _closure1_slot6;
            backup = {};
            source = 19;
            source = vacuum[source];
            source = sequen.bind(report)(source);
            backup['source'] = source;
            source = result.guildInfoRowIcon;
            backup['style'] = source;
            output = update.bind(report)(output, backup);
            backup = new Array(2);
            backup[0] = output;
            output = _closure1_slot11;
            kiloes = vacuum[kiloes];
            kiloes = echoed.bind(report)(kiloes);
            sizing = kiloes.Text;
            kiloes = {'style': null, 'variant': 'text-xs/semibold', 'color': 'interactive-active'};
            result = result.guildInfoSubscriptionCount;
            kiloes['style'] = result;
            result = 13;
            update = vacuum[result];
            update = echoed.bind(report)(update);
            source = update.intl;
            update = source.format;
            result = vacuum[result];
            result = echoed.bind(report)(result);
            result = result.t;
            echoed = result.bexfNz;
            result = {};
            result['numSubscriptions'] = ctrled;
            result = update.bind(source)(echoed, result);
            kiloes['children'] = result;
            kiloes = output.bind(report)(sizing, kiloes);
            backup[1] = kiloes;
            yankee['children'] = backup;
            yankee = foxtra.bind(report)(romeon, yankee);
            offset[1] = yankee;
            golfie['children'] = offset;
            golfie = verify.bind(report)(option, golfie);
            oscard[1] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 472:
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo) { // Original name: BoostedGuild
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            michal = entity.guildId;
            var _closure2_slot0 = michal;
            yankee = entity.guildBoostSlots;
            var _closure2_slot1 = yankee;
            entity = _closure1_slot14;
            tangon = undefined;
            source = entity.bind(tangon)();
            michal = _closure1_slot0;
            zuuluu = _closure1_slot3;
            entity = 20;
            report = zuuluu[entity];
            offset = michal.bind(tangon)(report);
            option = offset.useStateFromStores;
            report = _closure1_slot8;
            golfie = new Array(1);
            golfie[0] = report;
            report = function() {
                zuuluu = _closure1_slot8;
                michal = zuuluu.getGuild;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            kiloes = option.bind(offset)(golfie, report);
            var _closure2_slot2 = kiloes;
            entity = zuuluu[entity];
            report = michal.bind(tangon)(entity);
            zuuluu = report.useStateFromStores;
            entity = _closure1_slot7;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                entity = _closure1_slot7;
                entity = entity.theme;
                return entity;
            };
            echoed = zuuluu.bind(report)(michal, entity);
            sizing = null;
            entity = sizing != kiloes;
            output = null;
            if(!entity) { _fun00018_ip = 187; continue _fun00017 }
 141:
            entity = kiloes.banner;
            entity = sizing != entity;
            output = null;
            if(!entity) { _fun00018_ip = 187; continue _fun00017 }
 156:
            michal = _closure1_slot1;
            zuuluu = _closure1_slot3;
            entity = 21;
            entity = zuuluu[entity];
            michal = michal.bind(tangon)(entity);
            entity = michal.getGuildBannerSource;
            output = entity.bind(michal)(kiloes);
 187:
            michal = _closure1_slot0;
            zuuluu = _closure1_slot3;
            entity = 22;
            entity = zuuluu[entity];
            michal = michal.bind(tangon)(entity);
            entity = michal.useSubscriptionPlaceholderPatternSource;
            ctrled = entity.bind(michal)();
            if(!(sizing != output)) { _fun00018_ip = 224; continue _fun00017 }
 221:
            ctrled = output;
 224:
            zuuluu = _closure1_slot12;
            michal = _closure1_slot5;
            entity = {};
            report = source.boostedGuild;
            entity['style'] = report;
            option = _closure1_slot12;
            golfie = _closure1_slot5;
            report = {};
            offset = source.subscriptionBody;
            report['style'] = offset;
            foxtra = _closure1_slot12;
            romeon = _closure1_slot5;
            offset = {};
            backup = source.subscriptionImageView;
            offset['style'] = backup;
            update = _closure1_slot11;
            result = _closure1_slot6;
            backup = {};
            backup['source'] = ctrled;
            vacuum = source.subscriptionImage;
            ctrled = new Array(2);
            ctrled[0] = vacuum;
            sequen = sizing == output;
            vacuum = null;
            if(!sequen) { _fun00018_ip = 327; continue _fun00017 }
 321:
            vacuum = source.subscriptionImageFallback;
 327:
            ctrled[1] = vacuum;
            backup['style'] = ctrled;
            result = update.bind(tangon)(result, backup);
            backup = new Array(3);
            backup[0] = result;
            output = sizing != output;
            sizing = null;
            if(!output) { _fun00018_ip = 384; continue _fun00017 }
 358:
            update = _closure1_slot11;
            result = _closure1_slot5;
            output = {};
            source = source.subscriptionImageOverlay;
            output['style'] = source;
            sizing = update.bind(tangon)(result, output);
 384:
            backup[1] = sizing;
            result = _closure1_slot11;
            output = _closure1_slot1;
            update = _closure1_slot3;
            sizing = 23;
            sizing = update[sizing];
            output = output.bind(tangon)(sizing);
            sizing = {};
            sizing['guild'] = kiloes;
            sizing['theme'] = echoed;
            sizing = result.bind(tangon)(output, sizing);
            backup[2] = sizing;
            offset['children'] = backup;
            romeon = foxtra.bind(tangon)(romeon, offset);
            offset = new Array(2);
            offset[0] = romeon;
            backup = _closure1_slot11;
            foxtra = _closure1_slot20;
            romeon = {};
            romeon['guild'] = kiloes;
            kiloes = yankee.length;
            romeon['numGuildBoostSlots'] = kiloes;
            romeon = backup.bind(tangon)(foxtra, romeon);
            offset[1] = romeon;
            report['children'] = offset;
            golfie = option.bind(tangon)(golfie, report);
            report = new Array(2);
            report[0] = golfie;
            option = _closure1_slot11;
            golfie = _closure1_slot5;
            oscard = {};
            offset = yankee.map;
            verify = function(argFoo, argBar) {
                entity = argFoo;
                report = _closure1_slot11;
                tangon = _closure1_slot18;
                zuuluu = {};
                oscard = _closure2_slot2;
                zuuluu['guild'] = oscard;
                zuuluu['guildBoostSlot'] = entity;
                michal = _closure2_slot1;
                oscard = michal.length;
                michal = 1;
                oscard = oscard - michal;
                michal = argBar;
                michal = michal === oscard;
                zuuluu['isLast'] = michal;
                michal = entity.id;
                entity = undefined;
                entity = report.bind(entity)(tangon, zuuluu, michal);
                return entity;
            };
            verify = offset.bind(yankee)(verify);
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot21 = entity;
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
    var _closure1_slot4 = tangon;
    backup = 1;
    tangon = oscard[backup];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.View;
    var _closure1_slot5 = golfie;
    tangon = tangon.Image;
    var _closure1_slot6 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    sizing = 4;
    tangon = oscard[sizing];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    kiloes = tangon.Fonts;
    tangon = 7;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot11 = golfie;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsxs;
    var _closure1_slot12 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Fragment;
    var _closure1_slot13 = tangon;
    output = 8;
    tangon = oscard[output];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {};
    romeon = 32;
    verify['marginBottom'] = romeon;
    tangon['inventory'] = verify;
    foxtra = 16;
    verify = {'marginHorizontal': 16, 'marginBottom': 16};
    tangon['header'] = verify;
    verify = {};
    offset = 9;
    result = oscard[offset];
    result = yankee.bind(entity)(result);
    result = result.radii;
    result = result.xs;
    verify['borderRadius'] = result;
    verify['marginBottom'] = foxtra;
    tangon['boostedGuild'] = verify;
    verify = {};
    result = oscard[offset];
    result = yankee.bind(entity)(result);
    result = result.colors;
    result = result.BACKGROUND_TERTIARY;
    verify['backgroundColor'] = result;
    tangon['subscriptionBody'] = verify;
    verify = {'backgroundColor': null, 'width': '100%', 'height': 112, 'overflow': 'hidden', 'alignItems': 'center', 'justifyContent': 'center'};
    result = oscard[offset];
    result = yankee.bind(entity)(result);
    result = result.colors;
    result = result.BACKGROUND_SECONDARY_ALT;
    verify['backgroundColor'] = result;
    tangon['subscriptionImageView'] = verify;
    verify = {'position': 'absolute', 'width': '100%', 'height': '100%'};
    tangon['subscriptionImage'] = verify;
    verify = {};
    result = 0.4;
    verify['opacity'] = result;
    tangon['subscriptionImageFallback'] = verify;
    verify = {'position': 'absolute', 'width': '100%', 'height': '100%', 'backgroundColor': null, 'opacity': 0.4};
    result = oscard[offset];
    result = yankee.bind(entity)(result);
    result = result.colors;
    result = result.BLACK;
    verify['backgroundColor'] = result;
    tangon['subscriptionImageOverlay'] = verify;
    verify = {'flexDirection': 'row', 'padding': 16};
    tangon['guildInfo'] = verify;
    verify = {};
    verify['marginRight'] = output;
    tangon['guildInfoIcon'] = verify;
    verify = {};
    output = 10;
    output = oscard[output];
    echoed = yankee.bind(entity)(output);
    result = kiloes.DISPLAY_EXTRABOLD;
    kiloes = oscard[offset];
    kiloes = yankee.bind(entity)(kiloes);
    kiloes = kiloes.colors;
    output = kiloes.INTERACTIVE_ACTIVE;
    kiloes = 20;
    source = echoed.bind(entity)(result, output, kiloes);
    ctrled = verify;
    kiloes = copyDataProperties(ctrled, source);
    kiloes = 'marginBottom';
    verify[kiloes] = sizing;
    tangon['guildInfoName'] = verify;
    verify = {'flexDirection': 'row', 'alignItems': 'center'};
    tangon['guildInfoRowBottom'] = verify;
    verify = {'height': 12, 'width': 8, 'marginLeft': 2, 'marginRight': 8};
    tangon['guildInfoRowIcon'] = verify;
    verify = {};
    verify['lineHeight'] = foxtra;
    tangon['guildInfoSubscriptionCount'] = verify;
    verify = {};
    kiloes = oscard[offset];
    kiloes = yankee.bind(entity)(kiloes);
    kiloes = kiloes.colors;
    kiloes = kiloes.BACKGROUND_SECONDARY;
    verify['backgroundColor'] = kiloes;
    verify['paddingLeft'] = foxtra;
    tangon['subscriptionSlot'] = verify;
    verify = {'alignItems': 'center', 'flexDirection': 'row', 'paddingRight': 16, 'paddingVertical': 12};
    tangon['subscriptionSlotInner'] = verify;
    verify = {};
    kiloes = oscard[offset];
    kiloes = yankee.bind(entity)(kiloes);
    kiloes = kiloes.colors;
    kiloes = kiloes.BACKGROUND_MODIFIER_ACCENT;
    verify['backgroundColor'] = kiloes;
    verify['height'] = backup;
    tangon['subscriptionSlotBorder'] = verify;
    verify = {'flexShrink': 1, 'flexGrow': 1};
    tangon['subscriptionSlotInfo'] = verify;
    verify = {};
    backup = 24;
    verify['lineHeight'] = backup;
    tangon['subscriptionSlotInfoTitle'] = verify;
    verify = {};
    verify['lineHeight'] = foxtra;
    tangon['subscriptionSlotInfoCooldown'] = verify;
    verify = {'color': null, 'fontSize': 16, 'fontWeight': '500', 'lineHeight': 20};
    foxtra = oscard[offset];
    foxtra = yankee.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.CONTROL_BRAND_FOREGROUND;
    verify['color'] = foxtra;
    tangon['subscriptionSlotInfoTransferText'] = verify;
    verify = {};
    verify['marginBottom'] = romeon;
    tangon['unusedSlots'] = verify;
    verify = {'color': null, 'fontSize': 16, 'fontWeight': '500', 'lineHeight': 20};
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.TEXT_LINK;
    verify['color'] = offset;
    tangon['subscribeButtonText'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot14 = tangon;
    tangon = 15000;
    var _closure1_slot15 = tangon;
    tangon = 27;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/native/GuildBoostSlotsInventory.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: GuildBoostSlotsInventory
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = _closure1_slot14;
            report = undefined;
            sizing = entity.bind(report)();
            tangon = _closure1_slot4;
            zuuluu = tangon.useEffect;
            michal = function() {
                report = _closure1_slot2;
                tangon = _closure1_slot3;
                entity = 24;
                zuuluu = tangon[entity];
                entity = undefined;
                report = report.bind(entity)(zuuluu);
                zuuluu = report.fetchSubscriptions;
                zuuluu = zuuluu.bind(report)();
                zuuluu = _closure1_slot0;
                michal = 25;
                michal = tangon[michal];
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.fetchGuildBoostSlots;
                michal = michal.bind(zuuluu)();
                return entity;
            };
            entity = new Array(0);
            entity = zuuluu.bind(tangon)(michal, entity);
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot3;
            entity = 20;
            michal = oscard[entity];
            option = zuuluu.bind(report)(michal);
            golfie = option.useStateFromStores;
            michal = _closure1_slot10;
            tangon = new Array(1);
            tangon[0] = michal;
            michal = function() {
                michal = _closure1_slot10;
                entity = michal.getPremiumTypeSubscription;
                entity = entity.bind(michal)();
                return entity;
            };
            michal = golfie.bind(option)(tangon, michal);
            entity = oscard[entity];
            golfie = zuuluu.bind(report)(entity);
            tangon = golfie.useStateFromStores;
            entity = _closure1_slot9;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                entity = _closure1_slot9;
                entity = entity.boostSlots;
                return entity;
            };
            zuuluu = tangon.bind(golfie)(zuuluu, entity);
            tangon = _closure1_slot1;
            entity = 26;
            entity = oscard[entity];
            entity = tangon.bind(report)(entity);
            tangon = entity.bind(report)(zuuluu);
            zuuluu = tangon.groupBy;
            entity = function(argFoo) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    entity = argFoo;
                    michal = entity.premiumGuildSubscription;
                    entity = null;
                    zuuluu = entity != michal;
                    entity = '0';
                    if(!zuuluu) { _fun00022_ip = 29; continue _fun00021 }
 24:
                    entity = michal.guildId;
 29:
                    return entity;
                }
            };
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = zuuluu.value;
            tangon = entity.bind(zuuluu)();
            var _closure2_slot0 = tangon;
            verify = 0;
            kiloes = tangon[verify];
            entity = global;
            zuuluu = entity.Object;
            entity = zuuluu.keys;
            tangon = entity.bind(zuuluu)(tangon);
            zuuluu = tangon.filter;
            entity = function(argFoo) {
                michal = '0';
                entity = argFoo;
                entity = michal !== entity;
                return entity;
            };
            backup = zuuluu.bind(tangon)(entity);
            entity = backup.length;
            if(!(verify === entity)) { _fun00020_ip = 244; continue _fun00019 }
 232:
            entity = null;
            zuuluu = entity == kiloes;
            if(zuuluu) { _fun00020_ip = 523; continue _fun00019 }
 244:
            golfie = null;
            michal = golfie == michal;
            entity = null;
            if(michal) { _fun00020_ip = 523; continue _fun00019 }
 258:
            tangon = _closure1_slot12;
            zuuluu = _closure1_slot5;
            michal = {};
            oscard = sizing.inventory;
            michal['style'] = oscard;
            oscard = golfie != kiloes;
            option = null;
            if(!oscard) { _fun00020_ip = 322; continue _fun00019 }
 287:
            oscard = kiloes.length;
            oscard = oscard > verify;
            option = null;
            if(!oscard) { _fun00020_ip = 322; continue _fun00019 }
 301:
            foxtra = _closure1_slot11;
            offset = _closure1_slot19;
            oscard = {};
            oscard['unusedSlots'] = kiloes;
            option = foxtra.bind(report)(offset, oscard);
 322:
            oscard = new Array(2);
            oscard[0] = option;
            option = backup.length;
            option = option > verify;
            golfie = null;
            if(!option) { _fun00020_ip = 509; continue _fun00019 }
 347:
            offset = _closure1_slot12;
            verify = _closure1_slot13;
            option = {};
            kiloes = _closure1_slot11;
            echoed = _closure1_slot0;
            update = _closure1_slot3;
            yankee = 12;
            yankee = update[yankee];
            yankee = echoed.bind(report)(yankee);
            foxtra = yankee.Text;
            yankee = {'style': null, 'variant': 'eyebrow', 'color': 'header-secondary'};
            sizing = sizing.header;
            yankee['style'] = sizing;
            sizing = 13;
            output = update[sizing];
            output = echoed.bind(report)(output);
            result = output.intl;
            output = result.string;
            sizing = update[sizing];
            sizing = echoed.bind(report)(sizing);
            sizing = sizing.t;
            sizing = sizing.gB9oQ0;
            sizing = output.bind(result)(sizing);
            yankee['children'] = sizing;
            foxtra = kiloes.bind(report)(foxtra, yankee);
            yankee = new Array(2);
            yankee[0] = foxtra;
            foxtra = backup.map;
            romeon = function(argFoo) {
                report = argFoo;
                tangon = _closure1_slot11;
                zuuluu = _closure1_slot21;
                michal = {};
                michal['guildId'] = report;
                entity = _closure2_slot0;
                entity = entity[report];
                michal['guildBoostSlots'] = entity;
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu, michal, report);
                return entity;
            };
            romeon = foxtra.bind(backup)(romeon);
            yankee[1] = romeon;
            option['children'] = yankee;
            golfie = offset.bind(report)(verify, option);
 509:
            oscard[1] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 523:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();