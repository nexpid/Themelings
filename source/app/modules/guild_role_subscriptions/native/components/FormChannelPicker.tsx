// app/modules/guild_role_subscriptions/native/components/FormChannelPicker.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ChannelTypes;
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
    verify = {'alignItems': 'center', 'flexDirection': 'row'};
    tangon['container'] = verify;
    verify = {'marginStart': 8, 'flexGrow': 1};
    tangon['content'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 19;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_role_subscriptions/native/components/FormChannelPicker.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: FormChannelPicker
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            offset = entity.channelId;
            var _closure2_slot0 = offset;
            michal = entity.guildId;
            var _closure2_slot1 = michal;
            entity = entity.onChange;
            tangon = undefined;
            var _closure2_slot3 = tangon;
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 5;
            michal = golfie[michal];
            michal = zuuluu.bind(tangon)(michal);
            option = michal.bind(tangon)();
            michal = _closure1_slot7;
            foxtra = michal.bind(tangon)();
            zuuluu = _closure1_slot0;
            michal = 6;
            michal = golfie[michal];
            yankee = zuuluu.bind(tangon)(michal);
            verify = yankee.useStateFromStores;
            michal = _closure1_slot3;
            golfie = new Array(1);
            golfie[0] = michal;
            zuuluu = new Array(1);
            zuuluu[0] = offset;
            michal = function() {
                zuuluu = _closure1_slot3;
                michal = zuuluu.getChannel;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            romeon = verify.bind(yankee)(golfie, michal, zuuluu);
            var _closure2_slot2 = romeon;
            yankee = null;
            if(!(yankee == entity)) { _fun00002_ip = 142; continue _fun00001 }
 135:
            entity = function() {
                entity = undefined;
                return entity;
            };
 142:
            _closure2_slot3 = entity;
            zuuluu = _closure1_slot6;
            michal = _closure1_slot1;
            backup = _closure1_slot2;
            entity = 7;
            entity = backup[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            verify = foxtra.container;
            golfie = new Array(2);
            golfie[0] = verify;
            option = option.textInput;
            golfie[1] = option;
            entity['style'] = golfie;
            golfie = 'link';
            entity['accessibilityRole'] = golfie;
            report = function() { // Original name: onPress
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 8;
                    tangon = michal[entity];
                    entity = undefined;
                    oscard = report.bind(entity)(tangon);
                    report = oscard.openLazy;
                    tangon = _closure1_slot0;
                    zuuluu = 10;
                    zuuluu = michal[zuuluu];
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = 9;
                    zuuluu = michal[zuuluu];
                    michal = michal.paths;
                    tangon = tangon.bind(entity)(zuuluu, michal);
                    zuuluu = {};
                    golfie = _closure2_slot1;
                    zuuluu['guildId'] = golfie;
                    option = _closure2_slot2;
                    golfie = null;
                    option = golfie == option;
                    golfie = undefined;
                    if(option) { _fun00004_ip = 102; continue _fun00003 }
 93:
                    option = _closure2_slot2;
                    golfie = option.id;
 102:
                    zuuluu['selectedChannelId'] = golfie;
                    michal = _closure2_slot3;
                    zuuluu['onChannelSelected'] = michal;
                    michal = 'ChannelSelectorActionSheet';
                    michal = report.bind(oscard)(tangon, michal, zuuluu);
                    return entity;
                }
            };
            entity['onPress'] = report;
            report = yankee == romeon;
            golfie = null;
            if(report) { _fun00002_ip = 438; continue _fun00001 }
 230:
            option = romeon.type;
            report = _closure1_slot4;
            report = report.GUILD_VOICE;
            if(!(report !== option)) { _fun00002_ip = 357; continue _fun00001 }
 249:
            report = _closure1_slot4;
            report = report.GUILD_STAGE_VOICE;
            if(!(report !== option)) { _fun00002_ip = 335; continue _fun00001 }
 263:
            report = _closure1_slot4;
            report = report.GUILD_FORUM;
            if(!(report !== option)) { _fun00002_ip = 313; continue _fun00001 }
 277:
            report = _closure1_slot4;
            report = report.GUILD_MEDIA;
            if(!(report !== option)) { _fun00002_ip = 313; continue _fun00001 }
 291:
            option = _closure1_slot1;
            verify = _closure1_slot2;
            report = 14;
            report = verify[report];
            kiloes = option.bind(tangon)(report);
            _fun00002_ip = 377; continue _fun00001;
 313:
            option = _closure1_slot1;
            verify = _closure1_slot2;
            report = 13;
            report = verify[report];
            kiloes = option.bind(tangon)(report);
            _fun00002_ip = 377; continue _fun00001;
 335:
            option = _closure1_slot1;
            verify = _closure1_slot2;
            report = 12;
            report = verify[report];
            kiloes = option.bind(tangon)(report);
            _fun00002_ip = 377; continue _fun00001;
 357:
            option = _closure1_slot1;
            verify = _closure1_slot2;
            report = 11;
            report = verify[report];
            kiloes = option.bind(tangon)(report);
 377:
            verify = _closure1_slot5;
            output = _closure1_slot1;
            result = _closure1_slot2;
            sizing = 15;
            report = result[sizing];
            option = output.bind(tangon)(report);
            report = {};
            sizing = result[sizing];
            sizing = output.bind(tangon)(sizing);
            sizing = sizing.Sizes;
            sizing = sizing.SMALL;
            report['size'] = sizing;
            report['source'] = kiloes;
            golfie = verify.bind(tangon)(option, report);
 438:
            report = new Array(3);
            report[0] = golfie;
            verify = _closure1_slot5;
            option = _closure1_slot0;
            golfie = 16;
            golfie = backup[golfie];
            golfie = option.bind(tangon)(golfie);
            option = golfie.Text;
            golfie = {};
            foxtra = foxtra.content;
            golfie['style'] = foxtra;
            foxtra = 'text-md/medium';
            golfie['variant'] = foxtra;
            foxtra = yankee != offset;
            offset = 'text-muted';
            if(!foxtra) { _fun00002_ip = 509; continue _fun00001 }
 503:
            offset = 'text-normal';
 509:
            golfie['color'] = offset;
            foxtra = yankee == romeon;
            offset = undefined;
            if(foxtra) { _fun00002_ip = 527; continue _fun00001 }
 522:
            offset = romeon.name;
 527:
            if(!(yankee == offset)) { _fun00002_ip = 586; continue _fun00001 }
 531:
            backup = _closure1_slot0;
            kiloes = _closure1_slot2;
            yankee = 17;
            romeon = kiloes[yankee];
            romeon = backup.bind(tangon)(romeon);
            foxtra = romeon.intl;
            romeon = foxtra.string;
            yankee = kiloes[yankee];
            yankee = backup.bind(tangon)(yankee);
            yankee = yankee.t;
            yankee = yankee.r2pts7;
            offset = romeon.bind(foxtra)(yankee);
 586:
            golfie['children'] = offset;
            golfie = verify.bind(tangon)(option, golfie);
            report[1] = golfie;
            option = _closure1_slot5;
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            verify = 15;
            oscard = yankee[verify];
            golfie = offset.bind(tangon)(oscard);
            oscard = {};
            verify = yankee[verify];
            verify = offset.bind(tangon)(verify);
            verify = verify.Sizes;
            verify = verify.MEDIUM;
            oscard['size'] = verify;
            verify = 18;
            verify = yankee[verify];
            verify = offset.bind(tangon)(verify);
            oscard['source'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[2] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();