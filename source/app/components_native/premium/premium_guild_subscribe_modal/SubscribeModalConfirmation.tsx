// app/components_native/premium/premium_guild_subscribe_modal/SubscribeModalConfirmation.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: PendingCancellationWarning
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.slot;
            entity = _closure1_slot20;
            report = undefined;
            offset = entity.bind(report)();
            michal = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 12;
            entity = tangon[entity];
            verify = michal.bind(report)(entity);
            option = verify.useStateFromStores;
            entity = _closure1_slot12;
            oscard = new Array(1);
            oscard[0] = entity;
            entity = function() {
                michal = _closure1_slot12;
                entity = michal.getPremiumTypeSubscription;
                entity = entity.bind(michal)();
                return entity;
            };
            backup = option.bind(verify)(oscard, entity);
            entity = 13;
            entity = tangon[entity];
            michal = michal.bind(report)(entity);
            entity = michal.isGuildBoostSlotCanceled;
            michal = entity.bind(michal)(zuuluu);
            zuuluu = null;
            entity = null;
            if(!michal) { _fun00002_ip = 339; continue _fun00001 }
 107:
            michal = zuuluu != backup;
            entity = null;
            if(!michal) { _fun00002_ip = 339; continue _fun00001 }
 119:
            tangon = _closure1_slot18;
            zuuluu = _closure1_slot7;
            michal = {};
            oscard = offset.pendingCancellation;
            michal['style'] = oscard;
            verify = _closure1_slot17;
            option = _closure1_slot6;
            oscard = {};
            yankee = offset.pendingCancellationIcon;
            oscard['style'] = yankee;
            romeon = _closure1_slot1;
            kiloes = _closure1_slot2;
            yankee = 14;
            yankee = kiloes[yankee];
            yankee = romeon.bind(report)(yankee);
            oscard['source'] = yankee;
            option = verify.bind(report)(option, oscard);
            oscard = new Array(2);
            oscard[0] = option;
            verify = _closure1_slot17;
            yankee = _closure1_slot0;
            golfie = 15;
            golfie = kiloes[golfie];
            golfie = yankee.bind(report)(golfie);
            option = golfie.Text;
            golfie = {};
            offset = offset.pendingCancellationMessage;
            golfie['style'] = offset;
            offset = 'text-sm/medium';
            golfie['variant'] = offset;
            offset = 16;
            romeon = kiloes[offset];
            romeon = yankee.bind(report)(romeon);
            foxtra = romeon.intl;
            romeon = foxtra.format;
            offset = kiloes[offset];
            offset = yankee.bind(report)(offset);
            offset = offset.t;
            yankee = offset.SFpsCA;
            offset = {};
            backup = backup.currentPeriodEnd;
            offset['date'] = backup;
            backup = 1;
            offset['canceledCount'] = backup;
            offset = romeon.bind(foxtra)(yankee, offset);
            golfie['children'] = offset;
            golfie = verify.bind(report)(option, golfie);
            oscard[1] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 339:
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo) { // Original name: SubscribeConfirmation
        entity = argFoo;
        echoed = entity.guild;
        verify = entity.isModifyingSubscription;
        result = entity.slot;
        entity = entity.onPremiumGuildSubscribe;
        var _closure2_slot0 = entity;
        entity = _closure1_slot20;
        tangon = undefined;
        foxtra = entity.bind(tangon)();
        zuuluu = _closure1_slot18;
        michal = _closure1_slot19;
        entity = {};
        yankee = _closure1_slot17;
        option = _closure1_slot6;
        report = {};
        golfie = foxtra.subscribeImage;
        report['style'] = golfie;
        golfie = _closure1_slot1;
        sizing = _closure1_slot2;
        romeon = 17;
        romeon = sizing[romeon];
        romeon = golfie.bind(tangon)(romeon);
        report['source'] = romeon;
        option = yankee.bind(tangon)(option, report);
        report = new Array(6);
        report[0] = option;
        output = _closure1_slot17;
        romeon = _closure1_slot0;
        option = 15;
        yankee = sizing[option];
        yankee = romeon.bind(tangon)(yankee);
        kiloes = yankee.Text;
        backup = {'style': null, 'variant': 'heading-lg/extrabold', 'color': 'header-primary'};
        yankee = foxtra.header;
        backup['style'] = yankee;
        yankee = 16;
        update = sizing[yankee];
        update = romeon.bind(tangon)(update);
        ctrled = update.intl;
        source = ctrled.string;
        update = sizing[yankee];
        update = romeon.bind(tangon)(update);
        update = update.t;
        update = update.yTlZV1;
        update = source.bind(ctrled)(update);
        backup['children'] = update;
        backup = output.bind(tangon)(kiloes, backup);
        report[1] = backup;
        output = _closure1_slot17;
        backup = 18;
        backup = sizing[backup];
        kiloes = golfie.bind(tangon)(backup);
        backup = {};
        update = foxtra.guildPreview;
        backup['style'] = update;
        backup['guild'] = echoed;
        backup = output.bind(tangon)(kiloes, backup);
        report[2] = backup;
        output = _closure1_slot17;
        option = sizing[option];
        option = romeon.bind(tangon)(option);
        backup = option.Text;
        option = {};
        echoed = foxtra.blurb;
        kiloes = new Array(2);
        kiloes[0] = echoed;
        echoed = foxtra.warning;
        kiloes[1] = echoed;
        option['style'] = kiloes;
        kiloes = 'text-sm/medium';
        option['variant'] = kiloes;
        kiloes = sizing[yankee];
        kiloes = romeon.bind(tangon)(kiloes);
        ctrled = kiloes.intl;
        source = ctrled.format;
        kiloes = sizing[yankee];
        kiloes = romeon.bind(tangon)(kiloes);
        kiloes = kiloes.t;
        update = kiloes.KPnDlp;
        echoed = {};
        kiloes = _closure1_slot16;
        echoed['days'] = kiloes;
        kiloes = 1;
        echoed['slotCount'] = kiloes;
        echoed = source.bind(ctrled)(update, echoed);
        option['children'] = echoed;
        option = output.bind(tangon)(backup, option);
        report[3] = option;
        output = _closure1_slot17;
        backup = _closure1_slot21;
        option = {};
        option['slot'] = result;
        option = output.bind(tangon)(backup, option);
        report[4] = option;
        option = _closure1_slot17;
        oscard = 19;
        oscard = sizing[oscard];
        golfie = golfie.bind(tangon)(oscard);
        oscard = {};
        foxtra = foxtra.confirmButton;
        oscard['style'] = foxtra;
        foxtra = sizing[yankee];
        foxtra = romeon.bind(tangon)(foxtra);
        backup = foxtra.intl;
        foxtra = backup.formatToPlainString;
        yankee = sizing[yankee];
        yankee = romeon.bind(tangon)(yankee);
        yankee = yankee.t;
        romeon = yankee.ZU5x5+;
        yankee = {};
        yankee['slotCount'] = kiloes;
        yankee = foxtra.bind(backup)(romeon, yankee);
        oscard['text'] = yankee;
        offset = function() { // Original name: onPress
            zuuluu = _closure2_slot0;
            entity = undefined;
            michal = false;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        oscard['onPress'] = offset;
        oscard['loading'] = verify;
        oscard = option.bind(tangon)(golfie, oscard);
        report[5] = oscard;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo) { // Original name: TransferConfirmation
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            record = entity.guild;
            yankee = entity.isModifyingSubscription;
            sizing = entity.previousGuildSubscriptionSlot;
            var _closure2_slot0 = sizing;
            entity = entity.onPremiumGuildSubscribe;
            var _closure2_slot1 = entity;
            entity = _closure1_slot20;
            report = undefined;
            oscard = entity.bind(report)();
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 20;
            entity = tangon[entity];
            golfie = zuuluu.bind(report)(entity);
            entity = golfie.useGuildSubscriptionRemovalSource;
            offset = entity.bind(golfie)();
            entity = 12;
            entity = tangon[entity];
            golfie = zuuluu.bind(report)(entity);
            tangon = golfie.useStateFromStores;
            entity = _closure1_slot10;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = _closure2_slot0;
                    zuuluu = entity.premiumGuildSubscription;
                    entity = null;
                    zuuluu = entity != zuuluu;
                    if(!zuuluu) { _fun00006_ip = 54; continue _fun00005 }
 22:
                    tangon = _closure1_slot10;
                    zuuluu = tangon.getGuild;
                    michal = _closure2_slot0;
                    michal = michal.premiumGuildSubscription;
                    michal = michal.guildId;
                    entity = zuuluu.bind(tangon)(michal);
 54:
                    return entity;
                }
            };
            config = tangon.bind(golfie)(zuuluu, entity);
            entity = null;
            if(!(entity != config)) { _fun00004_ip = 1027; continue _fun00003 }
 130:
            tangon = _closure1_slot18;
            zuuluu = _closure1_slot19;
            entity = {};
            verify = _closure1_slot17;
            option = _closure1_slot6;
            golfie = {};
            foxtra = oscard.transferImage;
            golfie['style'] = foxtra;
            golfie['source'] = offset;
            option = verify.bind(report)(option, golfie);
            golfie = new Array(6);
            golfie[0] = option;
            offset = _closure1_slot17;
            backup = _closure1_slot0;
            result = _closure1_slot2;
            update = 15;
            option = result[update];
            option = backup.bind(report)(option);
            verify = option.Text;
            option = {'style': null, 'variant': 'heading-lg/extrabold', 'color': 'header-primary'};
            foxtra = oscard.header;
            option['style'] = foxtra;
            foxtra = 16;
            kiloes = result[foxtra];
            kiloes = backup.bind(report)(kiloes);
            echoed = kiloes.intl;
            output = echoed.string;
            kiloes = result[foxtra];
            kiloes = backup.bind(report)(kiloes);
            kiloes = kiloes.t;
            kiloes = kiloes.h92jfX;
            kiloes = output.bind(echoed)(kiloes);
            option['children'] = kiloes;
            option = offset.bind(report)(verify, option);
            golfie[1] = option;
            offset = _closure1_slot17;
            option = result[update];
            option = backup.bind(report)(option);
            verify = option.Text;
            option = {};
            kiloes = oscard.blurb;
            option['style'] = kiloes;
            kiloes = 'text-sm/medium';
            option['variant'] = kiloes;
            kiloes = result[foxtra];
            kiloes = backup.bind(report)(kiloes);
            ctrled = kiloes.intl;
            source = ctrled.format;
            kiloes = result[foxtra];
            kiloes = backup.bind(report)(kiloes);
            kiloes = kiloes.t;
            echoed = kiloes.SSA2lp;
            output = 1;
            kiloes = {'slotCount': 1, 'guildCount': 1};
            kiloes = source.bind(ctrled)(echoed, kiloes);
            option['children'] = kiloes;
            option = offset.bind(report)(verify, option);
            golfie[2] = option;
            kiloes = _closure1_slot18;
            offset = _closure1_slot7;
            option = {};
            verify = oscard.transferPreviews;
            option['style'] = verify;
            source = _closure1_slot17;
            verify = result[update];
            verify = backup.bind(report)(verify);
            echoed = verify.Text;
            verify = {'style': null, 'variant': 'eyebrow', 'color': 'header-secondary'};
            ctrled = oscard.previewHeader;
            verify['style'] = ctrled;
            ctrled = result[foxtra];
            ctrled = backup.bind(report)(ctrled);
            cntext = ctrled.intl;
            sequen = cntext.format;
            ctrled = result[foxtra];
            ctrled = backup.bind(report)(ctrled);
            ctrled = ctrled.t;
            vacuum = ctrled.5zQYEx;
            ctrled = {};
            ctrled['guildCount'] = output;
            ctrled = sequen.bind(cntext)(vacuum, ctrled);
            verify['children'] = ctrled;
            verify = source.bind(report)(echoed, verify);
            echoed = new Array(4);
            echoed[0] = verify;
            sequen = _closure1_slot17;
            verify = _closure1_slot1;
            vacuum = 18;
            source = result[vacuum];
            ctrled = verify.bind(report)(source);
            source = {};
            cntext = oscard.guildPreview;
            source['style'] = cntext;
            source['guild'] = config;
            source = sequen.bind(report)(ctrled, source);
            echoed[1] = source;
            ctrled = _closure1_slot17;
            update = result[update];
            update = backup.bind(report)(update);
            source = update.Text;
            update = {'style': null, 'variant': 'eyebrow', 'color': 'header-secondary'};
            sequen = oscard.previewHeader;
            update['style'] = sequen;
            sequen = result[foxtra];
            sequen = backup.bind(report)(sequen);
            papara = sequen.intl;
            cntext = papara.format;
            sequen = result[foxtra];
            sequen = backup.bind(report)(sequen);
            sequen = sequen.t;
            config = sequen.ct6oxM;
            sequen = {};
            sequen['slotCount'] = output;
            sequen = cntext.bind(papara)(config, sequen);
            update['children'] = sequen;
            update = ctrled.bind(report)(source, update);
            echoed[2] = update;
            ctrled = _closure1_slot17;
            update = 21;
            update = result[update];
            source = verify.bind(report)(update);
            update = {};
            config = oscard.guildPreview;
            sequen = new Array(2);
            sequen[0] = config;
            config = oscard.activeTransferGuildCardBorder;
            sequen[1] = config;
            update['style'] = sequen;
            sequen = 22;
            config = result[sequen];
            config = backup.bind(report)(config);
            config = config.HorizontalGradient;
            config = config.START;
            update['start'] = config;
            config = result[sequen];
            config = backup.bind(report)(config);
            config = config.HorizontalGradient;
            config = config.END;
            update['end'] = config;
            sequen = result[sequen];
            sequen = backup.bind(report)(sequen);
            sequen = sequen.Gradients;
            sequen = sequen.PREMIUM_GUILD;
            update['colors'] = sequen;
            config = _closure1_slot17;
            vacuum = result[vacuum];
            sequen = verify.bind(report)(vacuum);
            vacuum = {};
            vacuum['guild'] = record;
            vacuum = config.bind(report)(sequen, vacuum);
            update['children'] = vacuum;
            update = ctrled.bind(report)(source, update);
            echoed[3] = update;
            option['children'] = echoed;
            option = kiloes.bind(report)(offset, option);
            golfie[3] = option;
            kiloes = _closure1_slot17;
            offset = _closure1_slot21;
            option = {};
            option['slot'] = sizing;
            option = kiloes.bind(report)(offset, option);
            golfie[4] = option;
            offset = _closure1_slot17;
            option = 19;
            option = result[option];
            verify = verify.bind(report)(option);
            option = {};
            kiloes = oscard.confirmButton;
            option['style'] = kiloes;
            kiloes = result[foxtra];
            kiloes = backup.bind(report)(kiloes);
            sizing = kiloes.intl;
            kiloes = sizing.formatToPlainString;
            foxtra = result[foxtra];
            foxtra = backup.bind(report)(foxtra);
            foxtra = foxtra.t;
            backup = foxtra.Oh6mxc;
            foxtra = {};
            foxtra['slotCount'] = output;
            foxtra = kiloes.bind(sizing)(backup, foxtra);
            option['text'] = foxtra;
            romeon = function() { // Original name: onPress
                zuuluu = _closure2_slot1;
                michal = undefined;
                entity = true;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            option['onPress'] = romeon;
            option['loading'] = yankee;
            option = offset.bind(report)(verify, option);
            golfie[5] = option;
            entity['children'] = golfie;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00004_ip = 1053; continue _fun00003;
 1027:
            tangon = _closure1_slot17;
            zuuluu = _closure1_slot5;
            michal = {};
            oscard = oscard.loading;
            michal['style'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 1053:
            return entity;
        }
    };
    var _closure1_slot23 = entity;
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
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot4 = tangon;
    romeon = 2;
    tangon = oscard[romeon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.ActivityIndicator;
    var _closure1_slot5 = golfie;
    golfie = tangon.Image;
    var _closure1_slot6 = golfie;
    kiloes = tangon.StyleSheet;
    golfie = tangon.View;
    var _closure1_slot7 = golfie;
    tangon = tangon.ScrollView;
    var _closure1_slot8 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticEvents;
    var _closure1_slot13 = golfie;
    golfie = tangon.AnalyticsObjects;
    var _closure1_slot14 = golfie;
    golfie = tangon.AnalyticsSections;
    var _closure1_slot15 = golfie;
    tangon = tangon.GUILD_BOOST_APPLY_COOLDOWN_DAYS;
    var _closure1_slot16 = tangon;
    tangon = 8;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot17 = golfie;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsxs;
    var _closure1_slot18 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Fragment;
    var _closure1_slot19 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'paddingHorizontal': 24, 'marginBottom': 24};
    tangon['content'] = verify;
    backup = '100%';
    verify = {'alignItems': 'center', 'width': '100%'};
    tangon['scrollableContent'] = verify;
    verify = {'marginTop': 105, 'alignSelf': 'center'};
    tangon['subscribeImage'] = verify;
    verify = {'marginTop': 65, 'alignSelf': 'center'};
    tangon['transferImage'] = verify;
    foxtra = 32;
    verify = {'marginTop': 32, 'marginBottom': 8};
    tangon['header'] = verify;
    offset = 16;
    verify = {'marginTop': 16, 'width': '100%'};
    tangon['transferPreviews'] = verify;
    verify = {'lineHeight': 16, 'marginTop': 16, 'letterSpacing': 0.2};
    tangon['previewHeader'] = verify;
    verify = {'marginTop': 8, 'width': '100%'};
    tangon['guildPreview'] = verify;
    verify = {'lineHeight': 18, 'textAlign': 'center'};
    tangon['blurb'] = verify;
    verify = {};
    verify['marginTop'] = offset;
    tangon['warning'] = verify;
    verify = {'marginTop': 16, 'padding': 16, 'backgroundColor': null, 'alignItems': 'center', 'flexDirection': 'row'};
    offset = 10;
    offset = oscard[offset];
    echoed = report.bind(entity)(offset);
    result = echoed.hexWithOpacity;
    offset = 11;
    sizing = oscard[offset];
    sizing = yankee.bind(entity)(sizing);
    sizing = sizing.unsafe_rawColors;
    output = sizing.YELLOW_300;
    sizing = 0.1;
    sizing = result.bind(echoed)(output, sizing);
    verify['backgroundColor'] = sizing;
    sizing = oscard[offset];
    sizing = yankee.bind(entity)(sizing);
    sizing = sizing.radii;
    sizing = sizing.xs;
    verify['borderRadius'] = sizing;
    sizing = oscard[offset];
    sizing = yankee.bind(entity)(sizing);
    sizing = sizing.unsafe_rawColors;
    sizing = sizing.YELLOW_300;
    verify['borderColor'] = sizing;
    kiloes = kiloes.hairlineWidth;
    verify['borderWidth'] = kiloes;
    verify['width'] = backup;
    tangon['pendingCancellation'] = verify;
    verify = {'marginLeft': 10, 'flexShrink': 1};
    tangon['pendingCancellationMessage'] = verify;
    verify = {'flexShrink': 0, 'width': 20, 'height': 20};
    tangon['pendingCancellationIcon'] = verify;
    verify = {};
    verify['marginTop'] = foxtra;
    tangon['loading'] = verify;
    verify = {};
    verify['marginTop'] = foxtra;
    tangon['confirmButton'] = verify;
    verify = {};
    verify['padding'] = romeon;
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.radii;
    offset = offset.xs;
    verify['borderRadius'] = offset;
    tangon['activeTransferGuildCardBorder'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot20 = tangon;
    tangon = 30;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'components_native/premium/premium_guild_subscribe_modal/SubscribeModalConfirmation.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: SubscribeModalConfirmation
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.guildId;
            var _closure2_slot0 = zuuluu;
            offset = michal.previousGuildSubscriptionSlot;
            var _closure2_slot1 = offset;
            zuuluu = michal.location;
            var _closure2_slot2 = zuuluu;
            tangon = _closure1_slot20;
            report = undefined;
            oscard = tangon.bind(report)();
            option = _closure1_slot4;
            tangon = option.useRef;
            tangon = tangon.bind(option)(zuuluu);
            var _closure2_slot3 = tangon;
            golfie = option.useEffect;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                michal = _closure2_slot3;
                entity = _closure2_slot2;
                michal['current'] = entity;
                entity = undefined;
                return entity;
            };
            zuuluu = golfie.bind(option)(zuuluu, tangon);
            golfie = option.useEffect;
            tangon = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 23;
                michal = michal[entity];
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                tangon = report.track;
                michal = _closure1_slot13;
                zuuluu = michal.OPEN_MODAL;
                michal = {};
                oscard = _closure1_slot15;
                oscard = oscard.PREMIUM_GUILD_SUBSCRIBE_CONFIRMATION_MODAL;
                michal['type'] = oscard;
                oscard = _closure2_slot3;
                oscard = oscard.current;
                michal['location'] = oscard;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            zuuluu = new Array(0);
            zuuluu = golfie.bind(option)(tangon, zuuluu);
            tangon = _closure1_slot1;
            golfie = _closure1_slot2;
            zuuluu = 24;
            zuuluu = golfie[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.bind(report)();
            tangon = _closure1_slot0;
            zuuluu = 12;
            option = golfie[zuuluu];
            romeon = tangon.bind(report)(option);
            yankee = romeon.useStateFromStores;
            option = _closure1_slot10;
            verify = new Array(1);
            verify[0] = option;
            option = function() {
                zuuluu = _closure1_slot10;
                michal = zuuluu.getGuild;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            sizing = yankee.bind(romeon)(verify, option);
            var _closure2_slot4 = sizing;
            option = golfie[zuuluu];
            romeon = tangon.bind(report)(option);
            yankee = romeon.useStateFromStores;
            option = _closure1_slot9;
            verify = new Array(1);
            verify[0] = option;
            option = function() {
                entity = _closure1_slot9;
                entity = entity.isModifyingAppliedBoost;
                return entity;
            };
            foxtra = yankee.bind(romeon)(verify, option);
            zuuluu = golfie[zuuluu];
            option = tangon.bind(report)(zuuluu);
            golfie = option.useStateFromStores;
            zuuluu = _closure1_slot11;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    tangon = _closure2_slot1;
                    michal = null;
                    if(!(michal == tangon)) { _fun00010_ip = 122; continue _fun00009 }
 15:
                    tangon = _closure1_slot11;
                    tangon = tangon.hasFetched;
                    if(tangon) { _fun00010_ip = 37; continue _fun00009 }
 31:
                    tangon = new Array(0);
                    _fun00010_ip = 100; continue _fun00009;
 37:
                    oscard = global;
                    golfie = oscard.Object;
                    oscard = golfie.values;
                    report = _closure1_slot11;
                    report = report.boostSlots;
                    golfie = oscard.bind(golfie)(report);
                    oscard = golfie.filter;
                    report = function(argFoo) {
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            michal = argFoo;
                            entity = michal.isOnCooldown;
                            entity = entity.bind(michal)();
                            entity = !entity;
                            if(!entity) { _fun00012_ip = 31; continue _fun00011 }
 19:
                            zuuluu = michal.premiumGuildSubscription;
                            michal = null;
                            entity = michal == zuuluu;
 31:
                            return entity;
                        }
                    };
                    oscard = oscard.bind(golfie)(report);
                    report = oscard.sort;
                    zuuluu = function(argFoo) {
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot2;
                            entity = 13;
                            michal = michal[entity];
                            entity = undefined;
                            zuuluu = zuuluu.bind(entity)(michal);
                            michal = zuuluu.isGuildBoostSlotCanceled;
                            entity = argFoo;
                            michal = michal.bind(zuuluu)(entity);
                            entity = -1;
                            if(!michal) { _fun00014_ip = 51; continue _fun00013 }
 48:
                            entity = 1;
 51:
                            return entity;
                        }
                    };
                    tangon = report.bind(oscard)(zuuluu);
 100:
                    report = tangon.length;
                    zuuluu = 0;
                    report = report > zuuluu;
                    michal = null;
                    if(!report) { _fun00010_ip = 120; continue _fun00009 }
 116:
                    michal = tangon[zuuluu];
 120:
                    return michal;
 122:
                    entity = _closure2_slot1;
                    return entity;
                }
            };
            backup = golfie.bind(option)(tangon, zuuluu);
            var _closure2_slot5 = backup;
            entity = function() {
                tangon = _closure1_slot3;
                zuuluu = undefined;
                michal = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(michal) { _fun00016_ip = 570; continue _fun00015 }
 10:
                            report = argFoo;
                            michal = undefined;
                            zuuluu = undefined;
                            golfie = _closure1_slot1;
                            option = _closure1_slot2;
                            tangon = 25;
                            tangon = option[tangon];
                            offset = golfie.bind(michal)(tangon);
                            verify = _closure2_slot5;
                            golfie = null;
                            verify = golfie != verify;
                            option = verify;
                            if(!verify) { _fun00016_ip = 145; continue _fun00015 }
 59:
                            verify = _closure2_slot5;
                            verify = verify.cooldownEndsAt;
                            verify = golfie == verify;
                            if(verify) { _fun00016_ip = 142; continue _fun00015 }
 76:
                            yankee = global;
                            backup = yankee.Date;
                            romeon = _closure2_slot5;
                            sizing = romeon.cooldownEndsAt;
                            foxtra = backup.prototype;
                            foxtra = Object.create(foxtra, {constructor: {value: backup}});
                            output = foxtra;
                            romeon = new output[backup](sizing, kiloes);
                            foxtra = romeon instanceof Object ? romeon : foxtra;
                            romeon = foxtra.valueOf;
                            romeon = romeon.bind(foxtra)();
                            foxtra = yankee.Date;
                            yankee = foxtra.now;
                            yankee = yankee.bind(foxtra)();
                            verify = romeon < yankee;
 142:
                            option = verify;
 145:
                            verify = option;
                            option = 'Cannot use a premium guild subscription slot while on cooldown';
                            option = offset.bind(michal)(verify, option);
 160: // try_start_0
                            if(!report) { _fun00016_ip = 235; continue _fun00015 }
 163:
                            report = _closure2_slot5;
                            report = report.premiumGuildSubscription;
                            zuuluu = report;
                            if(!(golfie != report)) { _fun00016_ip = 235; continue _fun00015 }
 180:
                            golfie = _closure1_slot0;
                            option = _closure1_slot2;
                            report = 26;
                            report = option[report];
                            option = golfie.bind(michal)(report);
                            golfie = option.unapplyFromGuild;
                            report = zuuluu.guildId;
                            zuuluu = zuuluu.id;
                            zuuluu = golfie.bind(option)(report, zuuluu);
                            SaveGenerator(address=226);
 224:
                            return zuuluu;
 226:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                            if(report) { _fun00016_ip = 422; continue _fun00015 }
 235:
                            golfie = _closure1_slot0;
                            option = _closure1_slot2;
                            report = 26;
                            report = option[report];
                            option = golfie.bind(michal)(report);
                            golfie = option.applyToGuild;
                            report = _closure2_slot4;
                            report = report.id;
                            tangon = _closure2_slot5;
                            verify = tangon.id;
                            tangon = new Array(1);
                            tangon[0] = verify;
                            tangon = golfie.bind(option)(report, tangon);
                            SaveGenerator(address=297);
 295:
                            return tangon;
 297:
                            ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                            if(report) { _fun00016_ip = 419; continue _fun00015 }
 303:
                            golfie = _closure1_slot1;
                            option = _closure1_slot2;
                            report = 27;
                            report = option[report];
                            offset = golfie.bind(michal)(report);
                            verify = offset.openLazy;
                            report = {};
                            yankee = function() { // Original name: importer
                                zuuluu = _closure1_slot0;
                                entity = _closure1_slot2;
                                michal = 29;
                                michal = entity[michal];
                                tangon = undefined;
                                zuuluu = zuuluu.bind(tangon)(michal);
                                michal = 28;
                                michal = entity[michal];
                                entity = entity.paths;
                                zuuluu = zuuluu.bind(tangon)(michal, entity);
                                michal = zuuluu.then;
                                entity = function(argFoo) {
                                    michal = argFoo;
                                    michal = michal.default;
                                    var _closure7_slot0 = michal;
                                    entity = function(argFoo) {
                                        tangon = _closure1_slot17;
                                        zuuluu = _closure7_slot0;
                                        michal = {};
                                        golfie = argFoo;
                                        option = michal;
                                        entity = copyDataProperties(option, golfie);
                                        oscard = _closure2_slot0;
                                        report = 'guildId';
                                        michal[report] = oscard;
                                        report = _closure2_slot1;
                                        entity = 'previousGuildSubscriptionSlot';
                                        michal[entity] = report;
                                        entity = undefined;
                                        entity = tangon.bind(entity)(zuuluu, michal);
                                        return entity;
                                    };
                                    return entity;
                                };
                                entity = michal.bind(zuuluu)(entity);
                                return entity;
                            };
                            report['importer'] = yankee;
                            report = verify.bind(offset)(report);
                            report = 23;
                            report = option[report];
                            verify = golfie.bind(michal)(report);
                            option = verify.track;
                            report = _closure1_slot13;
                            golfie = report.MODAL_DISMISSED;
                            report = {};
                            offset = _closure1_slot15;
                            offset = offset.PREMIUM_GUILD_SUBSCRIBE_CONFIRMATION_MODAL;
                            report['type'] = offset;
                            offset = _closure1_slot14;
                            offset = offset.BUTTON_CTA;
                            report['location_object'] = offset;
                            report = option.bind(verify)(golfie, report);
 414: // try_end0
                            _fun00016_ip = 567; continue _fun00015;
 419:
                            return tangon;
 422:
                            return zuuluu;
 425: // catch_target0
                            CatchBlockStart(arg_register=2);
                            tangon = _closure1_slot1;
                            offset = _closure1_slot2;
                            zuuluu = 27;
                            zuuluu = offset[zuuluu];
                            report = tangon.bind(michal)(zuuluu);
                            tangon = report.show;
                            zuuluu = {};
                            verify = _closure1_slot0;
                            oscard = 16;
                            golfie = offset[oscard];
                            golfie = verify.bind(michal)(golfie);
                            yankee = golfie.intl;
                            option = yankee.string;
                            golfie = offset[oscard];
                            golfie = verify.bind(michal)(golfie);
                            golfie = golfie.t;
                            golfie = golfie.Kx5W0d;
                            golfie = option.bind(yankee)(golfie);
                            zuuluu['title'] = golfie;
                            golfie = offset[oscard];
                            golfie = verify.bind(michal)(golfie);
                            option = golfie.intl;
                            golfie = option.string;
                            oscard = offset[oscard];
                            oscard = verify.bind(michal)(oscard);
                            oscard = oscard.t;
                            oscard = oscard.XueBVV;
                            oscard = golfie.bind(option)(oscard);
                            zuuluu['body'] = oscard;
                            zuuluu = tangon.bind(report)(zuuluu);
 567:
                            return michal;
 570:
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
            kiloes = entity.bind(report)();
            verify = null;
            if(!(verify != backup)) { _fun00008_ip = 422; continue _fun00007 }
 288:
            tangon = _closure1_slot17;
            zuuluu = _closure1_slot7;
            entity = {};
            option = _closure1_slot8;
            golfie = {};
            yankee = oscard.scrollableContent;
            golfie['contentContainerStyle'] = yankee;
            yankee = oscard.content;
            golfie['style'] = yankee;
            if(!(verify == offset)) { _fun00008_ip = 365; continue _fun00007 }
 328:
            yankee = _closure1_slot17;
            offset = _closure1_slot22;
            verify = {};
            verify['guild'] = sizing;
            verify['slot'] = backup;
            verify['isModifyingSubscription'] = foxtra;
            verify['onPremiumGuildSubscribe'] = kiloes;
            verify = yankee.bind(report)(offset, verify);
            _fun00008_ip = 400; continue _fun00007;
 365:
            romeon = _closure1_slot17;
            yankee = _closure1_slot23;
            offset = {};
            offset['guild'] = sizing;
            offset['onPremiumGuildSubscribe'] = kiloes;
            offset['previousGuildSubscriptionSlot'] = backup;
            offset['isModifyingSubscription'] = foxtra;
            verify = romeon.bind(report)(yankee, offset);
 400:
            golfie['children'] = verify;
            golfie = tangon.bind(report)(option, golfie);
            entity['children'] = golfie;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00008_ip = 448; continue _fun00007;
 422:
            tangon = _closure1_slot17;
            zuuluu = _closure1_slot5;
            michal = {};
            oscard = oscard.loading;
            michal['style'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 448:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();