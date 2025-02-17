// app/modules/messages/native/renderer/row_data/embeds/ReferralTrialEmbed.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: ReferralTrialEmbedInner
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            verify = mike.trialOffer;
            var _closure2_slot0 = verify;
            zulu = _closure1_slot0;
            yankee = _closure1_slot2;
            mike = 25;
            mike = yankee[mike];
            report = undefined;
            tango = zulu.bind(report)(mike);
            mike = tango.useMessageRendererTheme;
            offset = mike.bind(tango)();
            mike = 22;
            mike = yankee[mike];
            tango = zulu.bind(report)(mike);
            mike = tango.useEmbedThemeColors;
            mike = mike.bind(tango)(offset);
            mike = mike.colors;
            kilo = mike.headerColor;
            sizing = mike.titleColor;
            romeo = mike.subtitleColor;
            options = mike.borderColor;
            golf = mike.backgroundColor;
            backup = mike.thumbnailBackgroundColor;
            mike = 26;
            mike = yankee[mike];
            tango = zulu.bind(report)(mike);
            zulu = tango.useStateFromStoresObject;
            foxtrot = _closure1_slot5;
            mike = new Array(1);
            mike[0] = foxtrot;
            entity = function() {
                entity = {};
                oscar = _closure1_slot5;
                report = oscar.getUser;
                mike = _closure2_slot0;
                tango = mike.user_id;
                tango = report.bind(oscar)(tango);
                entity['recipient'] = tango;
                tango = _closure1_slot5;
                zulu = tango.getUser;
                mike = mike.referrer_id;
                mike = zulu.bind(tango)(mike);
                entity['sender'] = mike;
                return entity;
            };
            entity = zulu.bind(tango)(mike, entity);
            tango = entity.recipient;
            mike = entity.sender;
            zulu = _closure1_slot1;
            entity = 17;
            foxtrot = yankee[entity];
            output = zulu.bind(report)(foxtrot);
            foxtrot = output.useName;
            echo = foxtrot.bind(output)(tango);
            entity = yankee[entity];
            zulu = zulu.bind(report)(entity);
            entity = zulu.useName;
            control = entity.bind(zulu)(mike);
            entity = null;
            if(!(entity != tango)) { _fun00002_ip = 769; continue _fun00001 }
 222:
            if(!(entity != echo)) { _fun00002_ip = 769; continue _fun00001 }
 229:
            if(!(entity != mike)) { _fun00002_ip = 769; continue _fun00001 }
 236:
            if(!(entity != control)) { _fun00002_ip = 769; continue _fun00001 }
 243:
            zulu = _closure1_slot1;
            yankee = _closure1_slot2;
            mike = 18;
            mike = yankee[mike];
            zulu = zulu.bind(report)(mike);
            mike = zulu.isPremium;
            tango = mike.bind(zulu)(tango);
            zulu = _closure1_slot0;
            mike = 19;
            mike = yankee[mike];
            zulu = zulu.bind(report)(mike);
            mike = zulu.hasUserTrialOfferExpired;
            mike = mike.bind(zulu)(verify);
            verify = _closure1_slot0;
            zulu = _closure1_slot2;
            result = 15;
            yankee = zulu[result];
            yankee = verify.bind(report)(yankee);
            foxtrot = yankee.intl;
            if(tango) { _fun00002_ip = 403; continue _fun00001 }
 329:
            if(mike) { _fun00002_ip = 371; continue _fun00001 }
 332:
            update = foxtrot.formatToPlainString;
            yankee = zulu[result];
            yankee = verify.bind(report)(yankee);
            yankee = yankee.t;
            output = yankee.1oPGmp;
            yankee = {};
            yankee['username'] = echo;
            output = update.bind(foxtrot)(output, yankee);
            _fun00002_ip = 401; continue _fun00001;
 371:
            update = foxtrot.string;
            yankee = zulu[result];
            yankee = verify.bind(report)(yankee);
            yankee = yankee.t;
            yankee = yankee.9SNdf3;
            output = update.bind(foxtrot)(yankee);
 401:
            _fun00002_ip = 440; continue _fun00001;
 403:
            yankee = foxtrot.formatToPlainString;
            zulu = zulu[result];
            zulu = verify.bind(report)(zulu);
            zulu = zulu.t;
            verify = zulu.Mptau7;
            zulu = {};
            zulu['username'] = echo;
            output = yankee.bind(foxtrot)(verify, zulu);
 440:
            zulu = '';
            foxtrot = zulu;
            if(tango) { _fun00002_ip = 508; continue _fun00001 }
 450:
            foxtrot = zulu;
            if(mike) { _fun00002_ip = 508; continue _fun00001 }
 456:
            verify = _closure1_slot0;
            mike = _closure1_slot2;
            zulu = mike[result];
            zulu = verify.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = mike[result];
            mike = verify.bind(report)(mike);
            mike = mike.t;
            mike = mike.SGbw2N;
            foxtrot = zulu.bind(tango)(mike);
 508:
            tango = _closure1_slot11;
            vacuum = _closure1_slot1;
            yankee = _closure1_slot2;
            mike = 27;
            mike = yankee[mike];
            zulu = vacuum.bind(report)(mike);
            mike = {};
            verify = _closure1_slot0;
            oscar = 13;
            echo = yankee[oscar];
            source = verify.bind(report)(echo);
            update = source.getAssetUriForEmbed;
            echo = 23;
            echo = yankee[echo];
            echo = vacuum.bind(report)(echo);
            echo = update.bind(source)(echo);
            mike['thumbnailUrl'] = echo;
            echo = yankee[result];
            echo = verify.bind(report)(echo);
            source = echo.intl;
            update = source.formatToPlainString;
            result = yankee[result];
            result = verify.bind(report)(result);
            result = result.t;
            echo = result.lieTqa;
            result = {};
            result['username'] = control;
            echo = update.bind(source)(echo, result);
            result = echo.toUpperCase;
            result = result.bind(echo)();
            mike['headerText'] = result;
            mike['titleText'] = output;
            mike['titleColor'] = sizing;
            mike['headerColor'] = kilo;
            mike['thumbnailBackgroundColor'] = backup;
            mike['subtitle'] = foxtrot;
            mike['subtitleColor'] = romeo;
            mike['borderColor'] = options;
            mike['backgroundColor'] = golf;
            golf = 3;
            mike['thumbnailCornerRadius'] = golf;
            oscar = yankee[oscar];
            options = verify.bind(report)(oscar);
            golf = options.getAssetUriForEmbed;
            oscar = 24;
            oscar = yankee[oscar];
            verify = verify.bind(report)(oscar);
            oscar = verify.getPremiumEmbedBackgroundSource;
            oscar = oscar.bind(verify)(offset);
            oscar = golf.bind(options)(oscar);
            mike['splashUrl'] = oscar;
            oscar = true;
            mike['splashHasRadialGradient'] = oscar;
            oscar = 0.8;
            mike['splashOpacity'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return mike;
 769:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.HelpdeskArticles;
    var _closure1_slot9 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
    var _closure1_slot10 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot11 = tango;
    tango = 28;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/native/renderer/row_data/embeds/ReferralTrialEmbed.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: ReferralTrialEmbed
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            entity = entity.message;
            var _closure2_slot0 = entity;
            mike = entity.referralTrialOfferId;
            var _closure2_slot1 = mike;
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            tango = 26;
            options = golf[tango];
            report = undefined;
            yankee = oscar.bind(report)(options);
            offset = yankee.useStateFromStores;
            options = _closure1_slot4;
            verify = new Array(1);
            verify[0] = options;
            options = function() {
                zulu = _closure1_slot4;
                mike = zulu.getChannel;
                tango = _closure2_slot0;
                entity = tango.getChannelId;
                entity = entity.bind(tango)();
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            options = offset.bind(yankee)(verify, options);
            tango = golf[tango];
            golf = oscar.bind(report)(tango);
            oscar = golf.useStateFromStores;
            verify = _closure1_slot3;
            tango = new Array(1);
            tango[0] = verify;
            zulu = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zulu = _closure2_slot1;
                    entity = null;
                    zulu = entity != zulu;
                    entity = undefined;
                    if(!zulu) { _fun00006_ip = 40; continue _fun00005 }
 18:
                    tango = _closure1_slot3;
                    zulu = tango.getRelevantUserTrialOffer;
                    mike = _closure2_slot1;
                    entity = zulu.bind(tango)(mike);
 40:
                    return entity;
                }
            };
            oscar = oscar.bind(golf)(tango, zulu);
            tango = null;
            zulu = tango != options;
            if(!zulu) { _fun00004_ip = 133; continue _fun00003 }
 123:
            golf = options.isDM;
            zulu = golf.bind(options)();
 133:
            entity = entity.author;
            golf = tango != entity;
            entity = null;
            if(!golf) { _fun00004_ip = 183; continue _fun00003 }
 148:
            entity = null;
            if(!zulu) { _fun00004_ip = 183; continue _fun00003 }
 153:
            zulu = tango != oscar;
            entity = null;
            if(!zulu) { _fun00004_ip = 183; continue _fun00003 }
 162:
            tango = _closure1_slot11;
            zulu = _closure1_slot12;
            mike = {};
            mike['trialOffer'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 183:
            return entity;
        }
    };
    zulu['default'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: createReferralTrialEmbedRedeemable
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tango = argFoo;
            backup = argBaz;
            entity = tango.author;
            status = null;
            if(!(status != entity)) { _fun00008_ip = 398; continue _fun00007 }
 21:
            entity = tango.referralTrialOfferId;
            if(!(status != entity)) { _fun00008_ip = 398; continue _fun00007 }
 34:
            zulu = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 10;
            entity = verify[entity];
            golf = undefined;
            report = zulu.bind(golf)(entity);
            zulu = report.createNativeStyleProperties;
            entity = {};
            options = _closure1_slot1;
            oscar = 11;
            offset = verify[oscar];
            offset = options.bind(golf)(offset);
            offset = offset.colors;
            offset = offset.WHITE;
            entity['headerTextColor'] = offset;
            offset = verify[oscar];
            offset = options.bind(golf)(offset);
            offset = offset.colors;
            offset = offset.HEADER_PRIMARY;
            entity['titleColor'] = offset;
            offset = verify[oscar];
            offset = options.bind(golf)(offset);
            offset = offset.colors;
            offset = offset.TEXT_NORMAL;
            entity['bodyTextColor'] = offset;
            offset = verify[oscar];
            offset = options.bind(golf)(offset);
            offset = offset.colors;
            offset = offset.TEXT_MUTED;
            entity['footerTextColor'] = offset;
            offset = verify[oscar];
            offset = options.bind(golf)(offset);
            offset = offset.colors;
            offset = offset.INTERACTIVE_NORMAL;
            entity['subTextColor'] = offset;
            offset = verify[oscar];
            offset = options.bind(golf)(offset);
            offset = offset.colors;
            offset = offset.TEXT_LINK;
            entity['linkButtonColor'] = offset;
            offset = verify[oscar];
            offset = options.bind(golf)(offset);
            offset = offset.colors;
            offset = offset.BACKGROUND_SECONDARY_ALT;
            entity['backgroundColor'] = offset;
            oscar = verify[oscar];
            oscar = options.bind(golf)(oscar);
            oscar = oscar.colors;
            oscar = oscar.WHITE;
            entity['acceptLabelColor'] = oscar;
            zulu = zulu.bind(report)(entity);
            entity = argBar;
            options = zulu.bind(golf)(entity);
            entity = options.headerTextColor;
            oscar = options.titleColor;
            zulu = options.bodyTextColor;
            foxtrot = options.footerTextColor;
            report = options.subTextColor;
            result = options.linkButtonColor;
            kilo = options.acceptLabelColor;
            options = options.backgroundColor;
            yankee = _closure1_slot4;
            offset = yankee.getChannel;
            verify = tango.getChannelId;
            verify = verify.bind(tango)();
            offset = offset.bind(yankee)(verify);
            yankee = tango.referralTrialOfferId;
            tango = status != offset;
            if(!tango) { _fun00008_ip = 380; continue _fun00007 }
 370:
            verify = offset.isDM;
            tango = verify.bind(offset)();
 380:
            offset = _closure1_slot3;
            verify = offset.getRelevantUserTrialOffer;
            sierra = verify.bind(offset)(yankee);
            if(tango) { _fun00008_ip = 402; continue _fun00007 }
 398:
            tango = undefined;
            return tango;
 402:
            tango = {};
            tango['backgroundColor'] = options;
            tango['borderColor'] = options;
            options = 3;
            tango['thumbnailCornerRadius'] = options;
            verify = _closure1_slot0;
            sizing = _closure1_slot2;
            offset = 13;
            options = sizing[offset];
            output = verify.bind(golf)(options);
            yankee = output.getAssetUriForEmbed;
            romeo = _closure1_slot1;
            options = 14;
            options = sizing[options];
            options = romeo.bind(golf)(options);
            options = yankee.bind(output)(options);
            tango['headerLogoUrl'] = options;
            options = 15;
            yankee = sizing[options];
            yankee = verify.bind(golf)(yankee);
            echo = yankee.intl;
            output = echo.string;
            yankee = sizing[options];
            yankee = verify.bind(golf)(yankee);
            yankee = yankee.t;
            yankee = yankee.gtNqJS;
            output = output.bind(echo)(yankee);
            yankee = output.toLocaleLowerCase;
            yankee = yankee.bind(output)();
            tango['headerText'] = yankee;
            tango['headerColor'] = entity;
            entity = sizing[offset];
            yankee = verify.bind(golf)(entity);
            verify = yankee.getAssetUriForEmbed;
            entity = 16;
            entity = sizing[entity];
            entity = romeo.bind(golf)(entity);
            entity = verify.bind(yankee)(entity);
            tango['thumbnailUrl'] = entity;
            yankee = _closure1_slot5;
            verify = yankee.getUser;
            romeo = status == sierra;
            entity = undefined;
            if(romeo) { _fun00008_ip = 606; continue _fun00007 }
 600:
            entity = sierra.user_id;
 606:
            romeo = verify.bind(yankee)(entity);
            yankee = _closure1_slot5;
            verify = yankee.getUser;
            sizing = status == sierra;
            entity = undefined;
            if(sizing) { _fun00008_ip = 636; continue _fun00007 }
 630:
            entity = sierra.referrer_id;
 636:
            entity = verify.bind(yankee)(entity);
            if(!(status != romeo)) { _fun00008_ip = 2402; continue _fun00007 }
 648:
            if(!(status != entity)) { _fun00008_ip = 2402; continue _fun00007 }
 655:
            sizing = _closure1_slot1;
            verify = _closure1_slot2;
            yankee = 17;
            output = verify[yankee];
            echo = sizing.bind(golf)(output);
            output = echo.getName;
            record = output.bind(echo)(entity);
            entity = entity.id;
            entity = entity === backup;
            yankee = verify[yankee];
            sizing = sizing.bind(golf)(yankee);
            yankee = sizing.getName;
            config = yankee.bind(sizing)(romeo);
            yankee = _closure1_slot0;
            sizing = verify[options];
            sizing = yankee.bind(golf)(sizing);
            output = sizing.intl;
            sizing = output.formatToPlainString;
            verify = verify[options];
            verify = yankee.bind(golf)(verify);
            verify = verify.t;
            yankee = verify.IiWKws;
            verify = {};
            verify['recipientUserName'] = config;
            verify['senderUserName'] = record;
            verify = sizing.bind(output)(yankee, verify);
            if(!(status != sierra)) { _fun00008_ip = 2289; continue _fun00007 }
 789:
            output = _closure1_slot7;
            sizing = output.getUserTrialOffer;
            yankee = _closure1_slot10;
            echo = sizing.bind(output)(yankee);
            yankee = function() { // Original name: isReferralTrialProductOfferIdEnabled
                tango = _closure1_slot8;
                zulu = tango.getOfferIds;
                zulu = zulu.bind(tango)();
                var _closure3_slot0 = zulu;
                zulu = global;
                tango = zulu.Object;
                zulu = tango.values;
                golf = _closure1_slot0;
                oscar = _closure1_slot2;
                report = 12;
                oscar = oscar[report];
                report = undefined;
                report = golf.bind(report)(oscar);
                report = report.TrialIdToProductOfferId;
                mike = _closure1_slot10;
                mike = report[mike];
                zulu = zulu.bind(tango)(mike);
                mike = zulu.every;
                entity = function(argFoo) {
                    zulu = _closure3_slot0;
                    mike = zulu.has;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            sizing = yankee.bind(golf)();
            output = sierra.id;
            update = status == echo;
            yankee = undefined;
            if(update) { _fun00008_ip = 838; continue _fun00007 }
 833:
            yankee = echo.id;
 838:
            yankee = output === yankee;
            if(!yankee) { _fun00008_ip = 848; continue _fun00007 }
 845:
            yankee = sizing;
 848:
            output = _closure1_slot1;
            sizing = _closure1_slot2;
            target = 18;
            sizing = sizing[target];
            output = output.bind(golf)(sizing);
            sizing = output.isPremium;
            sizing = sizing.bind(output)(romeo);
            update = sizing;
            if(sizing) { _fun00008_ip = 915; continue _fun00007 }
 885:
            romeo = romeo.id;
            update = sizing;
            if(!(romeo === backup)) { _fun00008_ip = 915; continue _fun00007 }
 897:
            backup = _closure1_slot6;
            romeo = backup.getPremiumTypeSubscription;
            romeo = romeo.bind(backup)();
            update = status != romeo;
 915:
            backup = _closure1_slot0;
            sizing = _closure1_slot2;
            romeo = 19;
            romeo = sizing[romeo];
            backup = backup.bind(golf)(romeo);
            romeo = backup.hasUserTrialOfferExpired;
            sizing = romeo.bind(backup)(sierra);
            romeo = sierra.redeemed_at;
            source = status != romeo;
            romeo = sierra.expires_at;
            output = status != romeo;
            romeo = undefined;
            backup = undefined;
            if(!output) { _fun00008_ip = 1384; continue _fun00007 }
 978:
            romeo = undefined;
            backup = undefined;
            if(sizing) { _fun00008_ip = 1384; continue _fun00007 }
 988:
            romeo = undefined;
            backup = undefined;
            if(update) { _fun00008_ip = 1384; continue _fun00007 }
 998:
            romeo = undefined;
            backup = undefined;
            if(source) { _fun00008_ip = 1384; continue _fun00007 }
 1008:
            sequence = global;
            control = sequence.Date;
            echo = control.parse;
            output = sierra.expires_at;
            echo = echo.bind(control)(output);
            control = sequence.Date;
            output = control.now;
            output = output.bind(control)();
            echo = echo - output;
            output = 86400000;
            papa = echo / output;
            output = 1;
            if(!(!(papa < output))) { _fun00008_ip = 1150; continue _fun00007 }
 1069:
            echo = _closure1_slot0;
            output = _closure1_slot2;
            control = output[options];
            control = echo.bind(golf)(control);
            vacuum = control.intl;
            control = vacuum.formatToPlainString;
            output = output[options];
            output = echo.bind(golf)(output);
            output = output.t;
            echo = output.ld+seH;
            output = {};
            context = sequence.Math;
            sequence = context.floor;
            sequence = sequence.bind(context)(papa);
            output['numDays'] = sequence;
            echo = control.bind(vacuum)(echo, output);
            _fun00008_ip = 1219; continue _fun00007;
 1150:
            control = _closure1_slot0;
            output = _closure1_slot2;
            vacuum = output[options];
            vacuum = control.bind(golf)(vacuum);
            sequence = vacuum.intl;
            vacuum = sequence.formatToPlainString;
            output = output[options];
            output = control.bind(golf)(output);
            output = output.t;
            control = output.JZCHZG;
            output = {};
            context = 24;
            context = context * papa;
            output['numHours'] = context;
            echo = vacuum.bind(sequence)(control, output);
 1219:
            papa = _closure1_slot0;
            context = _closure1_slot2;
            output = context[options];
            output = papa.bind(golf)(output);
            sequence = output.intl;
            vacuum = sequence.formatToPlainString;
            output = context[options];
            output = papa.bind(golf)(output);
            output = output.t;
            control = output.uj94Cw;
            output = {};
            context = context[target];
            target = papa.bind(golf)(context);
            papa = target.formatIntervalDuration;
            context = {};
            whiskey = sierra.subscription_trial;
            equality = status == whiskey;
            lima = undefined;
            if(equality) { _fun00008_ip = 1306; continue _fun00007 }
 1300:
            lima = whiskey.interval;
 1306:
            context['intervalType'] = lima;
            sierra = sierra.subscription_trial;
            lima = status == sierra;
            status = undefined;
            if(lima) { _fun00008_ip = 1332; continue _fun00007 }
 1326:
            status = sierra.interval_count;
 1332:
            context['intervalCount'] = status;
            context = papa.bind(target)(context);
            output['duration'] = context;
            sequence = vacuum.bind(sequence)(control, output);
            vacuum = sequence.replace;
            control = /\*/g;
            output = '';
            backup = vacuum.bind(sequence)(control, output);
            romeo = echo;
 1384:
            if(!update) { _fun00008_ip = 1525; continue _fun00007 }
 1390:
            if(entity) { _fun00008_ip = 1525; continue _fun00007 }
 1396:
            if(source) { _fun00008_ip = 1525; continue _fun00007 }
 1402:
            echo = _closure1_slot0;
            target = _closure1_slot2;
            output = target[options];
            output = echo.bind(golf)(output);
            vacuum = output.intl;
            control = vacuum.formatToParts;
            output = target[options];
            output = echo.bind(golf)(output);
            output = output.t;
            echo = output.LwCwT0;
            output = {};
            sequence = {};
            context = 'bindOpenUrl';
            sequence['action'] = context;
            papa = _closure1_slot1;
            context = 20;
            context = target[context];
            target = papa.bind(golf)(context);
            papa = target.getArticleURL;
            context = _closure1_slot9;
            context = context.REFERRAL_PROGRAM;
            context = papa.bind(target)(context);
            sequence['url'] = context;
            output['helpdeskArticle'] = sequence;
            output = control.bind(vacuum)(echo, output);
            echo = undefined;
            _fun00008_ip = 1892; continue _fun00007;
 1525:
            if(update) { _fun00008_ip = 1831; continue _fun00007 }
 1531:
            if(!sizing) { _fun00008_ip = 1596; continue _fun00007 }
 1534:
            if(source) { _fun00008_ip = 1596; continue _fun00007 }
 1537:
            context = _closure1_slot0;
            control = _closure1_slot2;
            vacuum = control[options];
            vacuum = context.bind(golf)(vacuum);
            sequence = vacuum.intl;
            vacuum = sequence.string;
            control = control[options];
            control = context.bind(golf)(control);
            control = control.t;
            control = control.9SNdf3;
            echo = vacuum.bind(sequence)(control);
            output = undefined;
            _fun00008_ip = 1892; continue _fun00007;
 1596:
            if(yankee) { _fun00008_ip = 1737; continue _fun00007 }
 1602:
            if(source) { _fun00008_ip = 1737; continue _fun00007 }
 1608:
            if(entity) { _fun00008_ip = 1737; continue _fun00007 }
 1614:
            control = _closure1_slot0;
            status = _closure1_slot2;
            source = status[options];
            source = control.bind(golf)(source);
            sequence = source.intl;
            vacuum = sequence.formatToParts;
            source = status[options];
            source = control.bind(golf)(source);
            source = source.t;
            control = source.7O7Zg4;
            source = {};
            context = {};
            papa = 'bindOpenUrl';
            context['action'] = papa;
            target = _closure1_slot1;
            papa = 20;
            papa = status[papa];
            status = target.bind(golf)(papa);
            target = status.getArticleURL;
            papa = _closure1_slot9;
            papa = papa.REFERRAL_PROGRAM;
            papa = target.bind(status)(papa);
            context['url'] = papa;
            source['helpdeskArticle'] = context;
            output = vacuum.bind(sequence)(control, source);
            echo = undefined;
            _fun00008_ip = 1892; continue _fun00007;
 1737:
            control = _closure1_slot0;
            source = _closure1_slot2;
            vacuum = source[options];
            vacuum = control.bind(golf)(vacuum);
            sequence = vacuum.intl;
            vacuum = sequence.formatToPlainString;
            source = source[options];
            source = control.bind(golf)(source);
            source = source.t;
            control = source.GaYGER;
            source = {};
            source['username'] = record;
            sequence = vacuum.bind(sequence)(control, source);
            vacuum = sequence.replace;
            control = /\*/g;
            source = '';
            echo = vacuum.bind(sequence)(control, source);
            output = undefined;
            _fun00008_ip = 1892; continue _fun00007;
 1831:
            control = _closure1_slot0;
            source = _closure1_slot2;
            vacuum = source[options];
            vacuum = control.bind(golf)(vacuum);
            sequence = vacuum.intl;
            vacuum = sequence.formatToPlainString;
            source = source[options];
            source = control.bind(golf)(source);
            source = source.t;
            control = source.Mptau7;
            source = {};
            source['username'] = config;
            echo = vacuum.bind(sequence)(control, source);
            output = undefined;
 1892:
            sizing = !sizing;
            if(!sizing) { _fun00008_ip = 1901; continue _fun00007 }
 1898:
            sizing = !update;
 1901:
            if(!sizing) { _fun00008_ip = 1907; continue _fun00007 }
 1904:
            sizing = yankee;
 1907:
            if(!sizing) { _fun00008_ip = 1913; continue _fun00007 }
 1910:
            sizing = !entity;
 1913:
            yankee = {};
            variable36 = yankee;
            quebec = tango;
            entity = copyDataProperties(variable36, quebec);
            entity = 'titleText';
            yankee[entity] = verify;
            entity = 'titleColor';
            yankee[entity] = oscar;
            entity = 'bodyText';
            yankee[entity] = echo;
            entity = 'structuredBodyText';
            yankee[entity] = output;
            entity = 'bodyTextColor';
            yankee[entity] = zulu;
            entity = 'subText';
            yankee[entity] = romeo;
            entity = 'subTextColor';
            yankee[entity] = report;
            romeo = 'canBeAccepted';
            yankee[romeo] = sizing;
            entity = yankee;
            if(!sizing) { _fun00008_ip = 2287; continue _fun00007 }
 2008:
            report = {};
            variable36 = report;
            quebec = yankee;
            yankee = copyDataProperties(variable36, quebec);
            yankee = 'footerText';
            report[yankee] = backup;
            yankee = 'footerTextColor';
            report[yankee] = foxtrot;
            yankee = _closure1_slot0;
            backup = _closure1_slot2;
            foxtrot = backup[options];
            foxtrot = yankee.bind(golf)(foxtrot);
            source = foxtrot.intl;
            update = source.formatToParts;
            foxtrot = backup[options];
            foxtrot = yankee.bind(golf)(foxtrot);
            foxtrot = foxtrot.t;
            echo = foxtrot.BPDKoK;
            output = {};
            control = {};
            foxtrot = 'bindOpenUrl';
            control['action'] = foxtrot;
            foxtrot = _closure1_slot1;
            vacuum = 20;
            vacuum = backup[vacuum];
            config = foxtrot.bind(golf)(vacuum);
            sequence = config.getArticleURL;
            vacuum = _closure1_slot9;
            vacuum = vacuum.REFERRAL_PROGRAM;
            vacuum = sequence.bind(config)(vacuum);
            control['url'] = vacuum;
            output['helpdeskArticle'] = control;
            echo = update.bind(source)(echo, output);
            output = 'linkButtonLabel';
            report[output] = echo;
            output = 'linkButtonColor';
            report[output] = result;
            report[romeo] = sizing;
            romeo = backup[options];
            romeo = yankee.bind(golf)(romeo);
            output = romeo.intl;
            sizing = output.string;
            romeo = backup[options];
            romeo = yankee.bind(golf)(romeo);
            romeo = romeo.t;
            romeo = romeo.bXTClZ;
            sizing = sizing.bind(output)(romeo);
            romeo = 'acceptLabelText';
            report[romeo] = sizing;
            romeo = 'acceptLabelColor';
            report[romeo] = kilo;
            offset = backup[offset];
            romeo = yankee.bind(golf)(offset);
            yankee = romeo.getAssetUriForEmbed;
            offset = 21;
            offset = backup[offset];
            offset = foxtrot.bind(golf)(offset);
            yankee = yankee.bind(romeo)(offset);
            offset = 'acceptLabelIconUrl';
            report[offset] = yankee;
            entity = report;
 2287:
            return entity;
 2289:
            entity = {};
            variable36 = entity;
            quebec = tango;
            report = copyDataProperties(variable36, quebec);
            report = 'titleText';
            entity[report] = verify;
            report = 'titleColor';
            entity[report] = oscar;
            offset = _closure1_slot0;
            report = _closure1_slot2;
            oscar = report[options];
            oscar = offset.bind(golf)(oscar);
            verify = oscar.intl;
            oscar = verify.string;
            report = report[options];
            report = offset.bind(golf)(report);
            report = report.t;
            report = report.eEz1Nz;
            oscar = oscar.bind(verify)(report);
            report = 'bodyText';
            entity[report] = oscar;
            report = 'bodyTextColor';
            entity[report] = zulu;
            oscar = false;
            report = 'canBeAccepted';
            entity[report] = oscar;
            return entity;
 2402:
            entity = {};
            variable36 = entity;
            quebec = tango;
            tango = copyDataProperties(variable36, quebec);
            oscar = _closure1_slot0;
            mike = _closure1_slot2;
            tango = mike[options];
            tango = oscar.bind(golf)(tango);
            report = tango.intl;
            tango = report.string;
            mike = mike[options];
            mike = oscar.bind(golf)(mike);
            mike = mike.t;
            mike = mike.eEz1Nz;
            tango = tango.bind(report)(mike);
            mike = 'bodyText';
            entity[mike] = tango;
            mike = 'bodyTextColor';
            entity[mike] = zulu;
            zulu = false;
            mike = 'canBeAccepted';
            entity[mike] = zulu;
            return entity;
        }
    };
    zulu['createReferralTrialEmbedRedeemable'] = tango;
    mike = function(argFoo, argBar) { // Original name: createReferralTrialEmbed
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            mike = argFoo;
            golf = argBar;
            zulu = mike.author;
            entity = null;
            if(!(entity != zulu)) { _fun00010_ip = 173; continue _fun00009 }
 21:
            zulu = mike.referralTrialOfferId;
            if(!(entity != zulu)) { _fun00010_ip = 173; continue _fun00009 }
 34:
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 22;
            zulu = report[zulu];
            options = undefined;
            zulu = tango.bind(options)(zulu);
            zulu = zulu.bind(options)(golf);
            zulu = zulu.colors;
            foxtrot = zulu.headerColor;
            backup = zulu.titleColor;
            offset = zulu.subtitleColor;
            report = zulu.borderColor;
            tango = zulu.backgroundColor;
            romeo = zulu.thumbnailBackgroundColor;
            verify = _closure1_slot4;
            oscar = verify.getChannel;
            zulu = mike.getChannelId;
            zulu = zulu.bind(mike)();
            oscar = oscar.bind(verify)(zulu);
            verify = mike.referralTrialOfferId;
            mike = entity != oscar;
            if(!mike) { _fun00010_ip = 151; continue _fun00009 }
 141:
            zulu = oscar.isDM;
            mike = zulu.bind(oscar)();
 151:
            oscar = _closure1_slot3;
            zulu = oscar.getRelevantUserTrialOffer;
            verify = zulu.bind(oscar)(verify);
            if(!mike) { _fun00010_ip = 173; continue _fun00009 }
 169:
            if(!(entity == verify)) { _fun00010_ip = 177; continue _fun00009 }
 173:
            mike = undefined;
            return mike;
 177:
            oscar = _closure1_slot5;
            zulu = oscar.getUser;
            mike = verify.user_id;
            source = zulu.bind(oscar)(mike);
            oscar = _closure1_slot5;
            zulu = oscar.getUser;
            mike = verify.referrer_id;
            control = zulu.bind(oscar)(mike);
            if(!(entity != source)) { _fun00010_ip = 814; continue _fun00009 }
 226:
            if(!(entity != control)) { _fun00010_ip = 814; continue _fun00009 }
 233:
            zulu = _closure1_slot1;
            yankee = _closure1_slot2;
            mike = 18;
            mike = yankee[mike];
            zulu = zulu.bind(options)(mike);
            mike = zulu.isPremium;
            oscar = mike.bind(zulu)(source);
            zulu = _closure1_slot0;
            mike = 19;
            mike = yankee[mike];
            zulu = zulu.bind(options)(mike);
            mike = zulu.hasUserTrialOfferExpired;
            mike = mike.bind(zulu)(verify);
            verify = _closure1_slot0;
            vacuum = _closure1_slot2;
            sizing = 15;
            zulu = vacuum[sizing];
            zulu = verify.bind(options)(zulu);
            result = zulu.intl;
            if(oscar) { _fun00010_ip = 420; continue _fun00009 }
 319:
            if(mike) { _fun00010_ip = 388; continue _fun00009 }
 322:
            kilo = result.formatToPlainString;
            zulu = vacuum[sizing];
            zulu = verify.bind(options)(zulu);
            zulu = zulu.t;
            yankee = zulu.1oPGmp;
            zulu = {};
            update = _closure1_slot1;
            echo = 17;
            echo = vacuum[echo];
            update = update.bind(options)(echo);
            echo = update.getName;
            echo = echo.bind(update)(source);
            zulu['username'] = echo;
            kilo = kilo.bind(result)(yankee, zulu);
            _fun00010_ip = 418; continue _fun00009;
 388:
            yankee = result.string;
            zulu = vacuum[sizing];
            zulu = verify.bind(options)(zulu);
            zulu = zulu.t;
            zulu = zulu.9SNdf3;
            kilo = yankee.bind(result)(zulu);
 418:
            _fun00010_ip = 484; continue _fun00009;
 420:
            yankee = result.formatToPlainString;
            zulu = vacuum[sizing];
            zulu = verify.bind(options)(zulu);
            zulu = zulu.t;
            verify = zulu.Mptau7;
            zulu = {};
            update = _closure1_slot1;
            echo = 17;
            echo = vacuum[echo];
            update = update.bind(options)(echo);
            echo = update.getName;
            echo = echo.bind(update)(source);
            zulu['username'] = echo;
            kilo = yankee.bind(result)(verify, zulu);
 484:
            zulu = '';
            yankee = zulu;
            if(oscar) { _fun00010_ip = 552; continue _fun00009 }
 494:
            yankee = zulu;
            if(mike) { _fun00010_ip = 552; continue _fun00009 }
 500:
            verify = _closure1_slot0;
            mike = _closure1_slot2;
            zulu = mike[sizing];
            zulu = verify.bind(options)(zulu);
            oscar = zulu.intl;
            zulu = oscar.string;
            mike = mike[sizing];
            mike = verify.bind(options)(mike);
            mike = mike.t;
            mike = mike.SGbw2N;
            yankee = zulu.bind(oscar)(mike);
 552:
            mike = {};
            oscar = _closure1_slot0;
            verify = _closure1_slot2;
            zulu = 13;
            result = verify[zulu];
            echo = oscar.bind(options)(result);
            result = echo.getAssetUriForEmbed;
            source = _closure1_slot1;
            output = 23;
            output = verify[output];
            output = source.bind(options)(output);
            output = result.bind(echo)(output);
            mike['thumbnailUrl'] = output;
            output = verify[sizing];
            output = oscar.bind(options)(output);
            echo = output.intl;
            result = echo.formatToPlainString;
            sizing = verify[sizing];
            sizing = oscar.bind(options)(sizing);
            sizing = sizing.t;
            output = sizing.lieTqa;
            sizing = {};
            update = 17;
            update = verify[update];
            source = source.bind(options)(update);
            update = source.getName;
            update = update.bind(source)(control);
            sizing['username'] = update;
            output = result.bind(echo)(output, sizing);
            sizing = output.toUpperCase;
            sizing = sizing.bind(output)();
            mike['headerText'] = sizing;
            mike['titleText'] = kilo;
            mike['titleColor'] = backup;
            mike['headerColor'] = foxtrot;
            mike['thumbnailBackgroundColor'] = romeo;
            mike['subtitle'] = yankee;
            mike['subtitleColor'] = offset;
            mike['borderColor'] = report;
            mike['backgroundColor'] = tango;
            tango = 3;
            mike['thumbnailCornerRadius'] = tango;
            zulu = verify[zulu];
            report = oscar.bind(options)(zulu);
            tango = report.getAssetUriForEmbed;
            zulu = 24;
            zulu = verify[zulu];
            oscar = oscar.bind(options)(zulu);
            zulu = oscar.getPremiumEmbedBackgroundSource;
            zulu = zulu.bind(oscar)(golf);
            zulu = tango.bind(report)(zulu);
            mike['splashUrl'] = zulu;
            zulu = true;
            mike['splashHasRadialGradient'] = zulu;
            zulu = 0.8;
            mike['splashOpacity'] = zulu;
            return mike;
 814:
            return entity;
        }
    };
    zulu['createReferralTrialEmbed'] = mike;
    return entity;
})();