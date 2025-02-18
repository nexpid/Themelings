// app/modules/saved_messages/native/ForLaterCardHeader.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    foxtra = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = foxtra;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: HeaderIcon
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            oscard = michal.channel;
            var _closure2_slot0 = oscard;
            michal = _closure1_slot7;
            report = undefined;
            tangon = michal.bind(report)();
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            michal = 6;
            michal = option[michal];
            option = zuuluu.bind(report)(michal);
            zuuluu = option.useStateFromStores;
            verify = _closure1_slot4;
            michal = new Array(1);
            michal[0] = verify;
            entity = function() {
                zuuluu = _closure1_slot4;
                michal = zuuluu.getGuild;
                entity = _closure2_slot0;
                entity = entity.guild_id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            verify = zuuluu.bind(option)(michal, entity);
            entity = null;
            if(!(entity == verify)) { _fun00002_ip = 251; continue _fun00001 }
 86:
            if(!(entity != oscard)) { _fun00002_ip = 103; continue _fun00001 }
 90:
            entity = oscard.isGroupDM;
            entity = entity.bind(oscard)();
            if(entity) { _fun00002_ip = 181; continue _fun00001 }
 103:
            zuuluu = _closure1_slot5;
            michal = _closure1_slot3;
            entity = {};
            tangon = tangon.dmIcon;
            entity['style'] = tangon;
            offset = _closure1_slot5;
            option = _closure1_slot0;
            yankee = _closure1_slot2;
            tangon = 10;
            tangon = yankee[tangon];
            tangon = option.bind(report)(tangon);
            option = tangon.ChatIcon;
            tangon = {};
            yankee = 'xxs';
            tangon['size'] = yankee;
            tangon = offset.bind(report)(option, tangon);
            entity['children'] = tangon;
            entity = zuuluu.bind(report)(michal, entity);
            _fun00002_ip = 249; continue _fun00001;
 181:
            tangon = _closure1_slot5;
            zuuluu = _closure1_slot1;
            offset = _closure1_slot2;
            michal = 8;
            michal = offset[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            michal['channel'] = oscard;
            option = _closure1_slot0;
            oscard = 9;
            oscard = offset[oscard];
            oscard = option.bind(report)(oscard);
            oscard = oscard.AvatarSizes;
            oscard = oscard.XSMALL;
            michal['size'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 249:
            _fun00002_ip = 316; continue _fun00001;
 251:
            tangon = _closure1_slot5;
            zuuluu = _closure1_slot1;
            option = _closure1_slot2;
            oscard = 7;
            michal = option[oscard];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            michal['guild'] = verify;
            golfie = _closure1_slot0;
            oscard = option[oscard];
            oscard = golfie.bind(report)(oscard);
            oscard = oscard.GuildIconSizes;
            oscard = oscard.XSMALL;
            michal['size'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 316:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo) { // Original name: ChannelName
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            michal = michal.channel;
            var _closure2_slot0 = michal;
            zuuluu = _closure1_slot7;
            tangon = undefined;
            offset = zuuluu.bind(tangon)();
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot2;
            report = 6;
            report = golfie[report];
            verify = zuuluu.bind(tangon)(report);
            option = verify.useStateFromStores;
            yankee = _closure1_slot4;
            report = new Array(1);
            report[0] = yankee;
            entity = function() {
                zuuluu = _closure1_slot4;
                michal = zuuluu.getGuild;
                entity = _closure2_slot0;
                entity = entity.guild_id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            report = option.bind(verify)(report, entity);
            option = _closure1_slot1;
            entity = 11;
            entity = golfie[entity];
            option = option.bind(tangon)(entity);
            entity = false;
            option = option.bind(tangon)(michal, entity);
            entity = 12;
            entity = golfie[entity];
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = zuuluu.getChannelIconComponentWithGuild;
            yankee = entity.bind(zuuluu)(michal, report);
            entity = michal.isPrivate;
            report = entity.bind(michal)();
            if(report) { _fun00004_ip = 144; continue _fun00003 }
 138:
            entity = null;
            report = entity == yankee;
 144:
            entity = michal.isDM;
            entity = entity.bind(michal)();
            verify = option;
            if(!entity) { _fun00004_ip = 224; continue _fun00003 }
 160:
            michal = _closure1_slot0;
            romeon = _closure1_slot2;
            entity = 13;
            zuuluu = romeon[entity];
            zuuluu = michal.bind(tangon)(zuuluu);
            golfie = zuuluu.intl;
            zuuluu = golfie.formatToPlainString;
            entity = romeon[entity];
            entity = michal.bind(tangon)(entity);
            entity = entity.t;
            michal = entity.smD7XV;
            entity = {};
            entity['username'] = option;
            verify = zuuluu.bind(golfie)(michal, entity);
 224:
            zuuluu = _closure1_slot6;
            michal = _closure1_slot3;
            entity = {};
            golfie = offset.channelNameContainer;
            entity['style'] = golfie;
            golfie = null;
            if(report) { _fun00004_ip = 279; continue _fun00003 }
 249:
            option = _closure1_slot5;
            report = {};
            romeon = offset.channelTypeIcon;
            report['style'] = romeon;
            romeon = 'xxs';
            report['size'] = romeon;
            golfie = option.bind(tangon)(yankee, report);
 279:
            report = new Array(2);
            report[0] = golfie;
            option = _closure1_slot5;
            golfie = _closure1_slot0;
            yankee = _closure1_slot2;
            oscard = 14;
            oscard = yankee[oscard];
            oscard = golfie.bind(tangon)(oscard);
            golfie = oscard.Text;
            oscard = {'style': null, 'variant': 'text-md/semibold', 'color': 'header-primary', 'lineClamp': 1};
            offset = offset.channelName;
            oscard['style'] = offset;
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot3 = tangon;
    yankee = 1;
    tangon = oscard[yankee];
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot5 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 8};
    tangon['cardHeader'] = verify;
    verify = {'borderRadius': null, 'width': 24, 'height': 24};
    offset = 4;
    romeon = oscard[offset];
    romeon = foxtra.bind(entity)(romeon);
    romeon = romeon.radii;
    romeon = romeon.sm;
    verify['borderRadius'] = romeon;
    tangon['icon'] = verify;
    verify = {};
    romeon = 6;
    verify['padding'] = romeon;
    romeon = oscard[offset];
    romeon = foxtra.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.BACKGROUND_TERTIARY;
    verify['backgroundColor'] = romeon;
    romeon = oscard[offset];
    romeon = foxtra.bind(entity)(romeon);
    romeon = romeon.radii;
    romeon = romeon.sm;
    verify['borderRadius'] = romeon;
    tangon['dmIcon'] = verify;
    verify = {'flexDirection': 'row', 'alignItems': 'center', 'flexShrink': 1};
    tangon['channelNameContainer'] = verify;
    verify = {};
    verify['flexShrink'] = yankee;
    tangon['channelName'] = verify;
    verify = {};
    verify['marginRight'] = offset;
    tangon['channelTypeIcon'] = verify;
    verify = {'marginVertical': 4294967292, 'marginLeft': 'auto'};
    tangon['actionsContainer'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 15;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/saved_messages/native/ForLaterCardHeader.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: ForLaterCardHeader
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            romeon = entity.channel;
            verify = entity.actions;
            entity = _closure1_slot7;
            tangon = undefined;
            offset = entity.bind(tangon)();
            zuuluu = _closure1_slot6;
            michal = _closure1_slot3;
            entity = {};
            report = offset.cardHeader;
            entity['style'] = report;
            option = _closure1_slot5;
            golfie = _closure1_slot8;
            report = {};
            report['channel'] = romeon;
            golfie = option.bind(tangon)(golfie, report);
            report = new Array(4);
            report[0] = golfie;
            golfie = romeon.isPrivate;
            option = golfie.bind(romeon)();
            golfie = null;
            if(option) { _fun00006_ip = 136; continue _fun00005 }
 90:
            foxtra = _closure1_slot5;
            yankee = _closure1_slot0;
            backup = _closure1_slot2;
            option = 5;
            option = backup[option];
            option = yankee.bind(tangon)(option);
            yankee = option.ChevronSmallRightIcon;
            option = {};
            backup = 'xxs';
            option['size'] = backup;
            golfie = foxtra.bind(tangon)(yankee, option);
 136:
            report[1] = golfie;
            yankee = _closure1_slot5;
            option = _closure1_slot9;
            golfie = {};
            golfie['channel'] = romeon;
            golfie = yankee.bind(tangon)(option, golfie);
            report[2] = golfie;
            option = _closure1_slot5;
            golfie = _closure1_slot3;
            oscard = {};
            offset = offset.actionsContainer;
            oscard['style'] = offset;
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[3] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['ForLaterCardHeader'] = michal;
    return entity;
})();