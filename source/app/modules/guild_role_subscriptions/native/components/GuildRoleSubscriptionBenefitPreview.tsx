// app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitPreview.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: BaseBenefitRow
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            sizing = entity.emoji;
            yankee = entity.children;
            foxtra = entity.contentStyle;
            output = entity.guildId;
            option = entity.isInteractive;
            tangon = undefined;
            if(!(option === tangon)) { _fun00002_ip = 39; continue _fun00001 }
 37:
            option = true;
 39:
            entity = _closure1_slot7;
            romeon = entity.bind(tangon)();
            zuuluu = _closure1_slot6;
            michal = _closure1_slot3;
            entity = {};
            report = romeon.container;
            entity['style'] = report;
            verify = _closure1_slot5;
            oscard = _closure1_slot3;
            report = {};
            offset = romeon.emojiContainer;
            report['style'] = offset;
            kiloes = _closure1_slot5;
            backup = _closure1_slot1;
            result = _closure1_slot2;
            offset = 5;
            offset = result[offset];
            backup = backup.bind(tangon)(offset);
            offset = {};
            offset['guildId'] = output;
            offset['id'] = sizing;
            offset = kiloes.bind(tangon)(backup, offset);
            report['children'] = offset;
            oscard = verify.bind(tangon)(oscard, report);
            report = new Array(3);
            report[0] = oscard;
            offset = _closure1_slot5;
            verify = _closure1_slot3;
            oscard = {};
            backup = romeon.benefitColumn;
            romeon = new Array(2);
            romeon[0] = backup;
            romeon[1] = foxtra;
            oscard['style'] = romeon;
            oscard['children'] = yankee;
            oscard = offset.bind(tangon)(verify, oscard);
            report[1] = oscard;
            oscard = true;
            oscard = oscard === option;
            if(!oscard) { _fun00002_ip = 250; continue _fun00001 }
 202:
            verify = _closure1_slot5;
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            golfie = 6;
            golfie = romeon[golfie];
            option = yankee.bind(tangon)(golfie);
            golfie = {};
            offset = 7;
            offset = romeon[offset];
            offset = yankee.bind(tangon)(offset);
            golfie['source'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 250:
            report[2] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo) { // Original name: DescriptiveBenefitRow
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.benefit;
            golfie = entity.children;
            option = entity.guildId;
            report = entity.isInteractive;
            michal = _closure1_slot7;
            tangon = undefined;
            romeon = michal.bind(tangon)();
            michal = zuuluu.description;
            offset = null;
            michal = offset != michal;
            oscard = null;
            if(!michal) { _fun00004_ip = 124; continue _fun00003 }
 54:
            yankee = _closure1_slot5;
            verify = _closure1_slot0;
            foxtra = _closure1_slot2;
            michal = 8;
            michal = foxtra[michal];
            michal = verify.bind(tangon)(michal);
            verify = michal.Text;
            michal = {'style': null, 'variant': 'text-sm/medium', 'color': 'interactive-normal'};
            romeon = romeon.benefitDescription;
            michal['style'] = romeon;
            romeon = zuuluu.description;
            michal['children'] = romeon;
            oscard = yankee.bind(tangon)(verify, michal);
 124:
            verify = zuuluu.emoji_id;
            if(!(offset == verify)) { _fun00004_ip = 194; continue _fun00003 }
 134:
            michal = zuuluu.emoji_name;
            offset = offset != michal;
            michal = '';
            if(!offset) { _fun00004_ip = 191; continue _fun00003 }
 151:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            offset = 9;
            offset = romeon[offset];
            romeon = yankee.bind(tangon)(offset);
            yankee = romeon.convertSurrogateToName;
            offset = zuuluu.emoji_name;
            zuuluu = false;
            michal = yankee.bind(romeon)(offset, zuuluu);
 191:
            verify = michal;
 194:
            zuuluu = _closure1_slot6;
            michal = _closure1_slot8;
            entity = {};
            entity['emoji'] = verify;
            entity['guildId'] = option;
            entity['isInteractive'] = report;
            report = new Array(2);
            report[0] = golfie;
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo) { // Original name: ChannelBenefitRow
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            option = entity.benefit;
            golfie = entity.guildId;
            oscard = entity.isInteractive;
            entity = _closure1_slot7;
            report = undefined;
            output = entity.bind(report)();
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 10;
            entity = tangon[entity];
            tangon = zuuluu.bind(report)(entity);
            zuuluu = tangon.useChannelWithTemplateFallback;
            entity = option.ref_id;
            foxtra = zuuluu.bind(tangon)(entity);
            entity = null;
            zuuluu = entity != foxtra;
            romeon = null;
            if(!zuuluu) { _fun00006_ip = 112; continue _fun00005 }
 81:
            tangon = _closure1_slot0;
            verify = _closure1_slot2;
            zuuluu = 11;
            zuuluu = verify[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.getChannelIcon;
            romeon = zuuluu.bind(tangon)(foxtra);
 112:
            if(!(entity != foxtra)) { _fun00006_ip = 325; continue _fun00005 }
 119:
            tangon = _closure1_slot5;
            zuuluu = _closure1_slot9;
            entity = {};
            entity['benefit'] = option;
            entity['guildId'] = golfie;
            entity['isInteractive'] = oscard;
            option = _closure1_slot6;
            golfie = _closure1_slot3;
            oscard = {};
            verify = output.channelRow;
            oscard['style'] = verify;
            yankee = _closure1_slot5;
            sizing = _closure1_slot1;
            backup = _closure1_slot2;
            kiloes = 6;
            verify = backup[kiloes];
            offset = sizing.bind(report)(verify);
            verify = {};
            output = output.channelIcon;
            verify['style'] = output;
            kiloes = backup[kiloes];
            kiloes = sizing.bind(report)(kiloes);
            kiloes = kiloes.Sizes;
            kiloes = kiloes.CUSTOM;
            verify['size'] = kiloes;
            verify['source'] = romeon;
            offset = yankee.bind(report)(offset, verify);
            verify = new Array(2);
            verify[0] = offset;
            romeon = _closure1_slot5;
            yankee = _closure1_slot0;
            offset = 8;
            offset = backup[offset];
            offset = yankee.bind(report)(offset);
            yankee = offset.Text;
            offset = {'variant': 'text-md/semibold', 'color': 'header-primary'};
            foxtra = foxtra.name;
            offset['children'] = foxtra;
            offset = romeon.bind(report)(yankee, offset);
            verify[1] = offset;
            oscard['children'] = verify;
            oscard = option.bind(report)(golfie, oscard);
            entity['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00006_ip = 452; continue _fun00005;
 325:
            tangon = _closure1_slot5;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            michal = 8;
            michal = offset[michal];
            michal = verify.bind(report)(michal);
            zuuluu = michal.Text;
            michal = {'variant': 'text-md/semibold', 'color': 'header-primary'};
            oscard = 12;
            golfie = offset[oscard];
            golfie = verify.bind(report)(golfie);
            option = golfie.intl;
            golfie = option.string;
            oscard = offset[oscard];
            oscard = verify.bind(report)(oscard);
            oscard = oscard.t;
            oscard = oscard.bz1PZW;
            verify = golfie.bind(option)(oscard);
            oscard = global;
            oscard = oscard.HermesInternal;
            option = oscard.concat;
            golfie = '[';
            oscard = ']';
            oscard = option.bind(golfie)(verify, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 452:
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: IntangibleBenefitRow
        entity = argFoo;
        option = entity.benefit;
        oscard = entity.guildId;
        report = entity.isInteractive;
        tangon = _closure1_slot5;
        zuuluu = _closure1_slot9;
        michal = {};
        michal['benefit'] = option;
        michal['guildId'] = oscard;
        michal['isInteractive'] = report;
        golfie = _closure1_slot5;
        oscard = _closure1_slot0;
        report = _closure1_slot2;
        entity = 8;
        report = report[entity];
        entity = undefined;
        report = oscard.bind(entity)(report);
        oscard = report.Text;
        report = {'variant': 'text-md/semibold', 'color': 'header-primary'};
        option = option.name;
        report['children'] = option;
        report = golfie.bind(entity)(oscard, report);
        michal['children'] = report;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: EmojiBenefitRow
        entity = argFoo;
        backup = entity.benefit;
        oscard = entity.guildId;
        report = entity.isInteractive;
        entity = _closure1_slot7;
        tangon = undefined;
        verify = entity.bind(tangon)();
        zuuluu = _closure1_slot6;
        michal = _closure1_slot8;
        entity = {};
        golfie = backup.id;
        entity['emoji'] = golfie;
        entity['guildId'] = oscard;
        oscard = verify.emojiRow;
        entity['contentStyle'] = oscard;
        entity['isInteractive'] = report;
        romeon = _closure1_slot5;
        golfie = _closure1_slot0;
        offset = _closure1_slot2;
        oscard = 8;
        report = offset[oscard];
        report = golfie.bind(tangon)(report);
        yankee = report.Text;
        report = {'style': null, 'variant': 'text-md/medium', 'color': 'text-muted', 'children': ':'};
        foxtra = verify.emojiColons;
        report['style'] = foxtra;
        yankee = romeon.bind(tangon)(yankee, report);
        report = new Array(3);
        report[0] = yankee;
        foxtra = _closure1_slot5;
        yankee = offset[oscard];
        yankee = golfie.bind(tangon)(yankee);
        romeon = yankee.Text;
        yankee = {'variant': 'text-md/semibold', 'color': 'header-primary'};
        backup = backup.name;
        yankee['children'] = backup;
        yankee = foxtra.bind(tangon)(romeon, yankee);
        report[1] = yankee;
        option = _closure1_slot5;
        oscard = offset[oscard];
        oscard = golfie.bind(tangon)(oscard);
        golfie = oscard.Text;
        oscard = {'style': null, 'variant': 'text-md/medium', 'color': 'text-muted', 'children': ':'};
        verify = verify.emojiColons;
        oscard['style'] = verify;
        oscard = option.bind(tangon)(golfie, oscard);
        report[2] = oscard;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot3 = tangon;
    offset = 2;
    tangon = oscard[offset];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildRoleSubscriptionBenefitTypes;
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot5 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'flexDirection': 'row', 'justifyContent': 'flex-start'};
    tangon['container'] = verify;
    verify = {'width': 24, 'height': 24, 'alignSelf': 'flex-start', 'alignItems': 'center', 'justifyContent': 'center', 'marginEnd': 16};
    tangon['emojiContainer'] = verify;
    verify = {'flexDirection': 'column', 'flexGrow': 1, 'flex': 1, 'alignItems': 'flex-start', 'justifyContent': 'center'};
    tangon['benefitColumn'] = verify;
    verify = {'flex': 1, 'marginTop': 2};
    tangon['benefitDescription'] = verify;
    verify = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center'};
    tangon['channelRow'] = verify;
    verify = {'width': 16, 'height': 16, 'marginEnd': 8};
    tangon['channelIcon'] = verify;
    verify = {'flexDirection': 'row', 'justifyContent': 'flex-start', 'alignItems': 'center'};
    tangon['emojiRow'] = verify;
    verify = {};
    verify['paddingHorizontal'] = offset;
    tangon['emojiColons'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitPreview.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: GuildRoleSubscriptionBenefitPreview
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            golfie = entity.benefit;
            oscard = entity.guildId;
            michal = entity.isInteractive;
            entity = 'roles';
            entity = entity in golfie;
            if(entity) { _fun00008_ip = 122; continue _fun00007 }
 34:
            tangon = golfie.ref_type;
            entity = _closure1_slot4;
            entity = entity.CHANNEL;
            if(!(tangon !== entity)) { _fun00008_ip = 88; continue _fun00007 }
 54:
            option = _closure1_slot5;
            report = _closure1_slot11;
            tangon = {};
            tangon['benefit'] = golfie;
            tangon['guildId'] = oscard;
            tangon['isInteractive'] = michal;
            entity = undefined;
            entity = option.bind(entity)(report, tangon);
            _fun00008_ip = 120; continue _fun00007;
 88:
            verify = _closure1_slot5;
            option = _closure1_slot10;
            report = {};
            report['benefit'] = golfie;
            report['guildId'] = oscard;
            report['isInteractive'] = michal;
            tangon = undefined;
            entity = verify.bind(tangon)(option, report);
 120:
            _fun00008_ip = 154; continue _fun00007;
 122:
            report = _closure1_slot5;
            tangon = _closure1_slot12;
            zuuluu = {};
            zuuluu['benefit'] = golfie;
            zuuluu['guildId'] = oscard;
            zuuluu['isInteractive'] = michal;
            michal = undefined;
            entity = report.bind(michal)(tangon, zuuluu);
 154:
            return entity;
        }
    };
    zuuluu['GuildRoleSubscriptionBenefitPreview'] = michal;
    return entity;
})();