// app/modules/interaction_components/native/components/GuildSelectComponentActionSheet.tsx
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    yankee = 4;
    tangon = oscard[yankee];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot8 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot9 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    golfie = {};
    tangon = {'flexDirection': 'row', 'alignItems': 'center'};
    golfie['guildIdentity'] = tangon;
    offset = {};
    tangon = 16;
    offset['marginRight'] = tangon;
    golfie['iconContainer'] = offset;
    offset = {};
    offset['marginRight'] = yankee;
    golfie['avatar'] = offset;
    golfie = option.bind(verify)(golfie);
    var _closure1_slot10 = golfie;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/interaction_components/native/components/GuildSelectComponentActionSheet.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: _default
        entity = argFoo;
        michal = entity.selectedGuild;
        zuuluu = entity.onSelectGuild;
        var _closure2_slot0 = zuuluu;
        entity = entity.user;
        var _closure2_slot1 = entity;
        zuuluu = _closure1_slot10;
        tangon = undefined;
        romeon = zuuluu.bind(tangon)();
        var _closure2_slot2 = romeon;
        offset = _closure1_slot4;
        oscard = offset.useState;
        zuuluu = '';
        zuuluu = oscard.bind(offset)(zuuluu);
        verify = _closure1_slot3;
        golfie = 2;
        oscard = verify.bind(tangon)(zuuluu, golfie);
        zuuluu = 0;
        backup = oscard[zuuluu];
        var _closure2_slot3 = backup;
        option = 1;
        oscard = oscard[option];
        yankee = {};
        kiloes = _closure1_slot0;
        foxtra = _closure1_slot2;
        sizing = 7;
        sizing = foxtra[sizing];
        sizing = kiloes.bind(tangon)(sizing);
        sizing = sizing.SelectOptionType;
        sizing = sizing.GUILD;
        yankee['type'] = sizing;
        sizing = michal.id;
        yankee['value'] = sizing;
        sizing = michal.name;
        yankee['label'] = sizing;
        yankee['guild'] = michal;
        michal = offset.useState;
        michal = michal.bind(offset)(yankee);
        michal = verify.bind(tangon)(michal, golfie);
        verify = michal[zuuluu];
        var _closure2_slot4 = verify;
        michal = michal[option];
        var _closure2_slot5 = michal;
        yankee = {'maxValues': 1, 'minValues': 1};
        michal = 8;
        zuuluu = foxtra[michal];
        zuuluu = kiloes.bind(tangon)(zuuluu);
        golfie = zuuluu.intl;
        zuuluu = golfie.string;
        michal = foxtra[michal];
        michal = kiloes.bind(tangon)(michal);
        michal = michal.t;
        michal = michal.ZImm//;
        michal = zuuluu.bind(golfie)(michal);
        yankee['placeholder'] = michal;
        golfie = offset.useCallback;
        zuuluu = function(argFoo) {
            zuuluu = function(argFoo) { // Original name: queryGuilds
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    report = argFoo;
                    michal = function(argFoo) { // Original name: guildRecordToGuildSearchableSelectOption
                        michal = argFoo;
                        entity = {};
                        report = _closure1_slot0;
                        tangon = _closure1_slot2;
                        zuuluu = 7;
                        tangon = tangon[zuuluu];
                        zuuluu = undefined;
                        zuuluu = report.bind(zuuluu)(tangon);
                        zuuluu = zuuluu.SelectOptionType;
                        zuuluu = zuuluu.GUILD;
                        entity['type'] = zuuluu;
                        zuuluu = michal.id;
                        entity['value'] = zuuluu;
                        zuuluu = michal.name;
                        entity['label'] = zuuluu;
                        entity['guild'] = michal;
                        return entity;
                    };
                    var _closure4_slot0 = michal;
                    zuuluu = report.length;
                    michal = 0;
                    if(!(michal !== zuuluu)) { _fun00002_ip = 88; continue _fun00001 }
 27:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 15;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.queryGuilds;
                    michal = {};
                    michal['query'] = report;
                    tangon = zuuluu.bind(tangon)(michal);
                    zuuluu = tangon.map;
                    michal = function(argFoo) {
                        entity = argFoo;
                        zuuluu = entity.record;
                        michal = _closure4_slot0;
                        entity = undefined;
                        entity = michal.bind(entity)(zuuluu);
                        return entity;
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    return michal;
 88:
                    zuuluu = _closure1_slot7;
                    michal = zuuluu.getFlattenedGuildIds;
                    tangon = michal.bind(zuuluu)();
                    zuuluu = tangon.reduce;
                    michal = global;
                    michal = michal.Array;
                    report = michal.prototype;
                    report = Object.create(report, {constructor: {value: michal}});
                    option = report;
                    michal = new option[michal](golfie);
                    michal = michal instanceof Object ? michal : report;
                    entity = function(argFoo, argBar) {
                        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                            entity = argFoo;
                            tangon = _closure1_slot6;
                            zuuluu = tangon.getGuild;
                            michal = argBar;
                            report = zuuluu.bind(tangon)(michal);
                            michal = null;
                            if(!(michal != report)) { _fun00004_ip = 53; continue _fun00003 }
 29:
                            zuuluu = entity.push;
                            tangon = _closure4_slot0;
                            michal = undefined;
                            michal = tangon.bind(michal)(report);
                            michal = zuuluu.bind(entity)(michal);
 53:
                            return entity;
                        }
                    };
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                }
            };
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            return entity;
        };
        michal = new Array(0);
        michal = golfie.bind(offset)(zuuluu, michal);
        var _closure2_slot6 = michal;
        golfie = offset.useMemo;
        zuuluu = new Array(2);
        zuuluu[0] = backup;
        zuuluu[1] = michal;
        michal = function() {
            zuuluu = _closure2_slot6;
            michal = _closure2_slot3;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        };
        offset = golfie.bind(offset)(michal, zuuluu);
        golfie = function() { // Original name: submitSelection
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 9;
            michal = michal[entity];
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            entity = michal.hideActionSheet;
            entity = entity.bind(michal)();
            return entity;
        };
        var _closure2_slot7 = golfie;
        zuuluu = _closure1_slot8;
        michal = _closure1_slot1;
        entity = 10;
        entity = foxtra[entity];
        michal = michal.bind(tangon)(entity);
        entity = {};
        foxtra = function(argFoo, argBar) { // Original name: onPressOptionItem
            tangon = argBar;
            report = _closure2_slot0;
            zuuluu = tangon.guild;
            entity = undefined;
            zuuluu = report.bind(entity)(zuuluu);
            zuuluu = _closure2_slot5;
            zuuluu = zuuluu.bind(entity)(tangon);
            michal = _closure2_slot7;
            michal = michal.bind(entity)();
            return entity;
        };
        entity['onPressOptionItem'] = foxtra;
        foxtra = function(argFoo) { // Original name: renderIcon
            tangon = _closure1_slot8;
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 11;
            entity = zuuluu[entity];
            zuuluu = undefined;
            michal = michal.bind(zuuluu)(entity);
            entity = {};
            report = argFoo;
            report = report.guild;
            entity['guild'] = report;
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        };
        entity['renderIcon'] = foxtra;
        foxtra = function(argFoo) { // Original name: renderHeaderIcon
            tangon = _closure1_slot8;
            michal = _closure1_slot1;
            golfie = _closure1_slot2;
            report = 11;
            entity = golfie[report];
            zuuluu = undefined;
            michal = michal.bind(zuuluu)(entity);
            entity = {};
            oscard = _closure1_slot0;
            report = golfie[report];
            report = oscard.bind(zuuluu)(report);
            report = report.GuildIconSizes;
            report = report.XSMALL;
            entity['size'] = report;
            report = argFoo;
            report = report.guild;
            entity['guild'] = report;
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        };
        entity['renderHeaderIcon'] = foxtra;
        romeon = romeon.iconContainer;
        entity['iconContainerStyle'] = romeon;
        romeon = function(argFoo) { // Original name: renderDescription
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                romeon = argFoo;
                golfie = _closure2_slot1;
                michal = golfie.hasAvatarForGuild;
                entity = romeon.guild;
                entity = entity.id;
                report = michal.bind(golfie)(entity);
                michal = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 12;
                entity = zuuluu[entity];
                tangon = undefined;
                zuuluu = michal.bind(tangon)(entity);
                michal = zuuluu.getNickname;
                entity = romeon.guild;
                entity = entity.id;
                verify = michal.bind(zuuluu)(entity, tangon, golfie);
                if(report) { _fun00006_ip = 90; continue _fun00005 }
 82:
                entity = null;
                if(!(entity == verify)) { _fun00006_ip = 90; continue _fun00005 }
 88:
                return tangon;
 90:
                zuuluu = _closure1_slot9;
                michal = _closure1_slot5;
                entity = {};
                golfie = _closure2_slot2;
                golfie = golfie.guildIdentity;
                entity['style'] = golfie;
                golfie = report;
                if(!golfie) { _fun00006_ip = 224; continue _fun00005 }
 120:
                yankee = _closure1_slot8;
                option = _closure1_slot1;
                kiloes = _closure1_slot2;
                foxtra = 13;
                report = kiloes[foxtra];
                option = option.bind(tangon)(report);
                report = {};
                backup = _closure1_slot0;
                foxtra = kiloes[foxtra];
                foxtra = backup.bind(tangon)(foxtra);
                foxtra = foxtra.AvatarSizes;
                foxtra = foxtra.SIZE_16;
                report['size'] = foxtra;
                foxtra = _closure2_slot2;
                foxtra = foxtra.avatar;
                report['style'] = foxtra;
                foxtra = _closure2_slot1;
                report['user'] = foxtra;
                romeon = romeon.guild;
                romeon = romeon.id;
                report['guildId'] = romeon;
                romeon = true;
                report['animate'] = romeon;
                golfie = yankee.bind(tangon)(option, report);
 224:
                report = new Array(2);
                report[0] = golfie;
                option = _closure1_slot8;
                golfie = _closure1_slot0;
                yankee = _closure1_slot2;
                oscard = 14;
                oscard = yankee[oscard];
                oscard = golfie.bind(tangon)(oscard);
                golfie = oscard.Text;
                oscard = {'variant': 'text-sm/medium', 'color': 'header-secondary'};
                yankee = null;
                if(!(yankee == verify)) { _fun00006_ip = 290; continue _fun00005 }
 281:
                offset = _closure2_slot1;
                verify = offset.username;
 290:
                oscard['children'] = verify;
                oscard = option.bind(tangon)(golfie, oscard);
                report[1] = oscard;
                entity['children'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        entity['renderDescription'] = romeon;
        entity['selectionActionComponent'] = yankee;
        entity['options'] = offset;
        entity['selectedCount'] = option;
        option = new Array(1);
        option[0] = verify;
        entity['selectedOptions'] = option;
        option = function(argFoo) { // Original name: isSelected
            entity = argFoo;
            michal = entity.value;
            entity = _closure2_slot4;
            entity = entity.value;
            entity = michal === entity;
            return entity;
        };
        entity['isSelected'] = option;
        entity['submitSelection'] = golfie;
        entity['onQueryChange'] = oscard;
        report = function(argFoo) { // Original name: itemAccessibilityLabel
            entity = argFoo;
            entity = entity.label;
            return entity;
        };
        entity['itemAccessibilityLabel'] = report;
        report = true;
        entity['expanded'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();