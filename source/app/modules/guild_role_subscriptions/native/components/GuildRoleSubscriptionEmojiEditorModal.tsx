// app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionEmojiEditorModal.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = oscard;
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
    tangon = 1;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    offset = 2;
    golfie = oscard[offset];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.View;
    var _closure1_slot6 = golfie;
    tangon = tangon.SectionList;
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot9 = golfie;
    golfie = tangon.Fragment;
    var _closure1_slot10 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot11 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'backgroundColor': null, 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'flex-start', 'height': '100%'};
    yankee = 7;
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BACKGROUND_PRIMARY;
    verify['backgroundColor'] = foxtra;
    tangon['container'] = verify;
    verify = {'flexGrow': 0, 'marginVertical': 24, 'marginHorizontal': 16};
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.radii;
    foxtra = foxtra.sm;
    verify['borderRadius'] = foxtra;
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_SECONDARY;
    verify['backgroundColor'] = yankee;
    tangon['emojiList'] = verify;
    verify = {'alignItems': 'flex-start', 'paddingTop': 16, 'paddingBottom': 14};
    tangon['row'] = verify;
    verify = {'width': 24, 'height': 24, 'marginBottom': 2};
    tangon['emojiImage'] = verify;
    verify = {};
    verify['marginBottom'] = offset;
    tangon['emojiAlias'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 19;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionEmojiEditorModal.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: GuildRoleSubscriptionEmojiEditorModal
        entity = argFoo;
        zuuluu = entity.guildId;
        var _closure2_slot0 = zuuluu;
        option = entity.subscriptionRoleId;
        var _closure2_slot1 = option;
        michal = entity.initialTierEmojiIds;
        foxtra = entity.listingId;
        backup = entity.onClose;
        var _closure2_slot2 = backup;
        entity = entity.onSave;
        var _closure2_slot3 = entity;
        entity = _closure1_slot12;
        tangon = undefined;
        yankee = entity.bind(tangon)();
        var _closure2_slot4 = yankee;
        golfie = _closure1_slot1;
        sizing = _closure1_slot2;
        entity = 8;
        entity = sizing[entity];
        entity = golfie.bind(tangon)(entity);
        offset = entity.bind(tangon)(zuuluu);
        var _closure2_slot5 = offset;
        kiloes = _closure1_slot0;
        entity = 9;
        entity = sizing[entity];
        romeon = kiloes.bind(tangon)(entity);
        report = romeon.useStateFromStores;
        entity = _closure1_slot8;
        zuuluu = new Array(1);
        zuuluu[0] = entity;
        entity = function() {
            zuuluu = _closure1_slot8;
            michal = zuuluu.getSubscriptionRoles;
            entity = _closure2_slot0;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        romeon = report.bind(romeon)(zuuluu, entity);
        var _closure2_slot6 = romeon;
        report = _closure1_slot5;
        entity = report.useState;
        zuuluu = entity.bind(report)(michal);
        michal = _closure1_slot4;
        entity = 2;
        zuuluu = michal.bind(tangon)(zuuluu, entity);
        entity = 0;
        entity = zuuluu[entity];
        var _closure2_slot7 = entity;
        michal = 1;
        michal = zuuluu[michal];
        var _closure2_slot8 = michal;
        zuuluu = report.useMemo;
        michal = new Array(4);
        michal[0] = romeon;
        michal[1] = offset;
        michal[2] = option;
        michal[3] = entity;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = _closure2_slot1;
                zuuluu = null;
                if(!(zuuluu != tangon)) { _fun00002_ip = 83; continue _fun00001 }
 15:
                tangon = _closure2_slot5;
                zuuluu = tangon.filter;
                michal = function(argFoo) {
                    michal = argFoo;
                    var _closure4_slot0 = michal;
                    zuuluu = michal.roles;
                    michal = zuuluu.filter;
                    entity = function(argFoo) {
                        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                            tangon = argFoo;
                            entity = _closure2_slot1;
                            zuuluu = tangon === entity;
                            if(!zuuluu) { _fun00004_ip = 46; continue _fun00003 }
 17:
                            oscard = _closure2_slot7;
                            report = oscard.has;
                            entity = _closure4_slot0;
                            entity = entity.id;
                            entity = report.bind(oscard)(entity);
                            zuuluu = !entity;
 46:
                            entity = !zuuluu;
                            if(zuuluu) { _fun00004_ip = 66; continue _fun00003 }
 52:
                            zuuluu = _closure2_slot6;
                            michal = zuuluu.has;
                            entity = michal.bind(zuuluu)(tangon);
 66:
                            return entity;
                        }
                    };
                    entity = michal.bind(zuuluu)(entity);
                    michal = entity.length;
                    entity = 0;
                    entity = entity === michal;
                    return entity;
                };
                tangon = zuuluu.bind(tangon)(michal);
                michal = global;
                zuuluu = michal.Set;
                michal = tangon.map;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.id;
                    return entity;
                };
                report = michal.bind(tangon)(entity);
                michal = zuuluu.prototype;
                michal = Object.create(michal, {constructor: {value: zuuluu}});
                oscard = michal;
                entity = new oscard[zuuluu](report, tangon);
                entity = entity instanceof Object ? entity : michal;
                return entity;
 83:
                entity = global;
                entity = entity.Set;
                michal = entity.prototype;
                michal = Object.create(michal, {constructor: {value: entity}});
                oscard = michal;
                entity = new oscard[entity](report);
                entity = entity instanceof Object ? entity : michal;
                return entity;
            }
        };
        entity = zuuluu.bind(report)(entity, michal);
        var _closure2_slot9 = entity;
        entity = function() {
            tangon = _closure1_slot3;
            zuuluu = undefined;
            michal = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00006_ip = 55; continue _fun00005 }
 7: // try_start_0
                        report = _closure2_slot3;
                        michal = _closure2_slot7;
                        tangon = undefined;
                        michal = report.bind(tangon)(michal);
                        SaveGenerator(address=29);
 27:
                        return michal;
 29:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(report) { _fun00006_ip = 45; continue _fun00005 }
 35:
                        zuuluu = _closure2_slot2;
                        zuuluu = zuuluu.bind(tangon)();
 43: // try_end0
                        _fun00006_ip = 50; continue _fun00005;
 45:
                        return michal;
 48: // catch_target0
                        CatchBlockStart(arg_register=1);
 50:
                        michal = undefined;
                        return michal;
 55:
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
        entity = entity.bind(tangon)();
        var _closure2_slot10 = entity;
        zuuluu = _closure1_slot11;
        michal = _closure1_slot6;
        entity = {};
        report = yankee.container;
        entity['style'] = report;
        option = _closure1_slot9;
        report = 12;
        report = sizing[report];
        golfie = golfie.bind(tangon)(report);
        report = {};
        romeon = 13;
        output = sizing[romeon];
        output = kiloes.bind(tangon)(output);
        echoed = output.intl;
        result = echoed.string;
        output = sizing[romeon];
        output = kiloes.bind(tangon)(output);
        output = output.t;
        output = output.W4XhnZ;
        output = result.bind(echoed)(output);
        report['title'] = output;
        report['onClose'] = backup;
        backup = function() { // Original name: onSave
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = _closure2_slot9;
                zuuluu = michal.size;
                michal = 0;
                if(!(michal !== zuuluu)) { _fun00008_ip = 323; continue _fun00007 }
 21:
                golfie = _closure1_slot1;
                option = _closure1_slot2;
                michal = 14;
                michal = option[michal];
                oscard = undefined;
                tangon = golfie.bind(oscard)(michal);
                zuuluu = tangon.show;
                michal = {};
                yankee = _closure1_slot0;
                report = 13;
                verify = option[report];
                verify = yankee.bind(oscard)(verify);
                romeon = verify.intl;
                offset = romeon.string;
                verify = option[report];
                verify = yankee.bind(oscard)(verify);
                verify = verify.t;
                verify = verify.30V0t7;
                verify = offset.bind(romeon)(verify);
                michal['title'] = verify;
                verify = option[report];
                verify = yankee.bind(oscard)(verify);
                foxtra = verify.intl;
                romeon = foxtra.formatToPlainString;
                verify = option[report];
                verify = yankee.bind(oscard)(verify);
                verify = verify.t;
                offset = verify.o6j/wM;
                verify = {};
                backup = _closure2_slot9;
                backup = backup.size;
                verify['numberOfEmojiSlatedForDeletion'] = backup;
                verify = romeon.bind(foxtra)(offset, verify);
                michal['body'] = verify;
                verify = option[report];
                verify = yankee.bind(oscard)(verify);
                romeon = verify.intl;
                offset = romeon.string;
                verify = option[report];
                verify = yankee.bind(oscard)(verify);
                verify = verify.t;
                verify = verify.ETE/oK;
                verify = offset.bind(romeon)(verify);
                michal['cancelText'] = verify;
                verify = option[report];
                verify = yankee.bind(oscard)(verify);
                offset = verify.intl;
                verify = offset.string;
                report = option[report];
                report = yankee.bind(oscard)(report);
                report = report.t;
                report = report.cY+Ooa;
                report = verify.bind(offset)(report);
                michal['confirmText'] = report;
                report = _closure2_slot10;
                michal['onConfirm'] = report;
                report = 15;
                report = option[report];
                report = golfie.bind(oscard)(report);
                report = report.Colors;
                report = report.RED;
                michal['confirmColor'] = report;
                michal = zuuluu.bind(tangon)(michal);
                _fun00008_ip = 333; continue _fun00007;
 323:
                michal = _closure2_slot10;
                entity = undefined;
                entity = michal.bind(entity)();
 333:
                entity = undefined;
                return entity;
            }
        };
        report['onSave'] = backup;
        report['listingId'] = foxtra;
        foxtra = true;
        report['canSave'] = foxtra;
        golfie = option.bind(tangon)(golfie, report);
        report = new Array(2);
        report[0] = golfie;
        golfie = _closure1_slot7;
        oscard = {};
        yankee = yankee.emojiList;
        oscard['style'] = yankee;
        yankee = function(argFoo) { // Original name: renderItem
            entity = argFoo;
            sizing = entity.item;
            var _closure3_slot0 = sizing;
            zuuluu = _closure2_slot7;
            michal = zuuluu.has;
            entity = sizing.id;
            golfie = michal.bind(zuuluu)(entity);
            zuuluu = _closure2_slot9;
            michal = zuuluu.has;
            entity = sizing.id;
            entity = michal.bind(zuuluu)(entity);
            var _closure3_slot1 = entity;
            tangon = _closure1_slot9;
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            report = 16;
            entity = option[report];
            zuuluu = undefined;
            entity = oscard.bind(zuuluu)(entity);
            michal = entity.FormRow;
            entity = {};
            romeon = _closure2_slot4;
            yankee = romeon.row;
            entity['style'] = yankee;
            backup = _closure1_slot1;
            offset = 10;
            offset = option[offset];
            yankee = backup.bind(zuuluu)(offset);
            offset = {};
            romeon = romeon.emojiImage;
            offset['style'] = romeon;
            romeon = {};
            foxtra = 11;
            foxtra = option[foxtra];
            kiloes = backup.bind(zuuluu)(foxtra);
            backup = kiloes.getEmojiURL;
            foxtra = {};
            output = sizing.id;
            foxtra['id'] = output;
            sizing = sizing.animated;
            foxtra['animated'] = sizing;
            sizing = 48;
            foxtra['size'] = sizing;
            foxtra = backup.bind(kiloes)(foxtra);
            romeon['uri'] = foxtra;
            offset['source'] = romeon;
            offset = tangon.bind(zuuluu)(yankee, offset);
            entity['leading'] = offset;
            offset = function() { // Original name: label
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    tangon = _closure1_slot11;
                    zuuluu = _closure1_slot10;
                    michal = {};
                    option = _closure1_slot9;
                    oscard = _closure1_slot1;
                    report = _closure1_slot2;
                    entity = 17;
                    report = report[entity];
                    entity = undefined;
                    golfie = oscard.bind(entity)(report);
                    report = {};
                    verify = _closure3_slot0;
                    verify = verify.name;
                    report['name'] = verify;
                    verify = _closure2_slot4;
                    verify = verify.emojiAlias;
                    report['style'] = verify;
                    golfie = option.bind(entity)(golfie, report);
                    report = new Array(2);
                    report[0] = golfie;
                    oscard = _closure3_slot1;
                    if(!oscard) { _fun00010_ip = 316; continue _fun00009 }
 98:
                    verify = _closure1_slot11;
                    option = _closure1_slot10;
                    golfie = {};
                    foxtra = _closure1_slot9;
                    output = _closure1_slot0;
                    result = _closure1_slot2;
                    yankee = 18;
                    offset = result[yankee];
                    offset = output.bind(entity)(offset);
                    romeon = offset.Text;
                    offset = {'variant': 'text-sm/normal', 'color': 'interactive-active'};
                    backup = 13;
                    kiloes = result[backup];
                    kiloes = output.bind(entity)(kiloes);
                    echoed = kiloes.intl;
                    sizing = echoed.string;
                    kiloes = result[backup];
                    kiloes = output.bind(entity)(kiloes);
                    kiloes = kiloes.t;
                    kiloes = kiloes.1GlN09;
                    kiloes = sizing.bind(echoed)(kiloes);
                    offset['children'] = kiloes;
                    romeon = foxtra.bind(entity)(romeon, offset);
                    offset = new Array(2);
                    offset[0] = romeon;
                    yankee = result[yankee];
                    yankee = output.bind(entity)(yankee);
                    romeon = yankee.Text;
                    yankee = {'variant': 'text-sm/normal', 'color': 'text-danger'};
                    kiloes = result[backup];
                    kiloes = output.bind(entity)(kiloes);
                    sizing = kiloes.intl;
                    kiloes = sizing.string;
                    backup = result[backup];
                    backup = output.bind(entity)(backup);
                    backup = backup.t;
                    backup = backup.J0XdJy;
                    backup = kiloes.bind(sizing)(backup);
                    yankee['children'] = backup;
                    yankee = foxtra.bind(entity)(romeon, yankee);
                    offset[1] = yankee;
                    golfie['children'] = offset;
                    oscard = verify.bind(entity)(option, golfie);
 316:
                    report[1] = oscard;
                    michal['children'] = report;
                    entity = tangon.bind(entity)(zuuluu, michal);
                    return entity;
                }
            };
            entity['label'] = offset;
            verify = function() { // Original name: onPress
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = _closure3_slot0;
                    tangon = entity.id;
                    entity = global;
                    report = entity.Set;
                    oscard = _closure2_slot7;
                    zuuluu = report.prototype;
                    zuuluu = Object.create(zuuluu, {constructor: {value: report}});
                    golfie = zuuluu;
                    michal = new golfie[report](oscard, report);
                    zuuluu = michal instanceof Object ? michal : zuuluu;
                    michal = zuuluu.has;
                    michal = michal.bind(zuuluu)(tangon);
                    if(michal) { _fun00012_ip = 72; continue _fun00011 }
 60:
                    michal = zuuluu.add;
                    michal = michal.bind(zuuluu)(tangon);
                    _fun00012_ip = 82; continue _fun00011;
 72:
                    michal = zuuluu.delete;
                    michal = michal.bind(zuuluu)(tangon);
 82:
                    michal = _closure2_slot8;
                    entity = undefined;
                    entity = michal.bind(entity)(zuuluu);
                    entity = undefined;
                    return entity;
                }
            };
            entity['onPress'] = verify;
            report = option[report];
            report = oscard.bind(zuuluu)(report);
            report = report.FormRow;
            oscard = report.Checkbox;
            report = {};
            report['selected'] = golfie;
            report = tangon.bind(zuuluu)(oscard, report);
            entity['trailing'] = report;
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        };
        oscard['renderItem'] = yankee;
        yankee = {};
        foxtra = sizing[romeon];
        foxtra = kiloes.bind(tangon)(foxtra);
        backup = foxtra.intl;
        foxtra = backup.string;
        romeon = sizing[romeon];
        romeon = kiloes.bind(tangon)(romeon);
        romeon = romeon.t;
        romeon = romeon.9Oq93t;
        romeon = foxtra.bind(backup)(romeon);
        yankee['title'] = romeon;
        yankee['data'] = offset;
        offset = new Array(1);
        offset[0] = yankee;
        oscard['sections'] = offset;
        verify = function() { // Original name: ItemSeparatorComponent
            tangon = _closure1_slot9;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 16;
            entity = zuuluu[entity];
            zuuluu = undefined;
            entity = michal.bind(zuuluu)(entity);
            michal = entity.FormDivider;
            entity = {};
            report = true;
            entity['iconPush'] = report;
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        };
        oscard['ItemSeparatorComponent'] = verify;
        verify = 'always';
        oscard['keyboardShouldPersistTaps'] = verify;
        oscard = option.bind(tangon)(golfie, oscard);
        report[1] = oscard;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();