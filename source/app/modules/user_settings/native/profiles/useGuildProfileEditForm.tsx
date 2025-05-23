// app/modules/user_settings/native/profiles/useGuildProfileEditForm.tsx
export default (function(_, argBar, argBaz, argCor, __, argFre, argPlu) {
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.FormStates;
    var _closure1_slot9 = tangon;
    tangon = 18;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_settings/native/profiles/useGuildProfileEditForm.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useGuildProfileEditForm
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            offset = 7;
            entity = tangon[offset];
            verify = undefined;
            oscard = zuuluu.bind(verify)(entity);
            report = oscard.useStateFromStores;
            entity = _closure1_slot8;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                michal = _closure1_slot8;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            sequen = report.bind(oscard)(michal, entity);
            var _closure2_slot0 = sequen;
            entity = tangon[offset];
            oscard = zuuluu.bind(verify)(entity);
            report = oscard.useStateFromStoresObject;
            entity = _closure1_slot5;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                entity = {};
                zuuluu = _closure1_slot5;
                michal = zuuluu.getAllPending;
                report = michal.bind(zuuluu)();
                oscard = entity;
                michal = copyDataProperties(oscard, report);
                michal = zuuluu.showNotice;
                tangon = michal.bind(zuuluu)();
                michal = 'hasEdits';
                entity[michal] = tangon;
                michal = zuuluu.getErrors;
                tangon = michal.bind(zuuluu)();
                michal = 'errors';
                entity[michal] = tangon;
                michal = zuuluu.getGuild;
                tangon = michal.bind(zuuluu)();
                michal = 'guild';
                entity[michal] = tangon;
                michal = zuuluu.getSource;
                tangon = michal.bind(zuuluu)();
                michal = 'source';
                entity[michal] = tangon;
                michal = zuuluu.getFormState;
                zuuluu = michal.bind(zuuluu)();
                michal = 'formState';
                entity[michal] = zuuluu;
                return entity;
            };
            oscard = report.bind(oscard)(michal, entity);
            vacuum = oscard.pendingAvatar;
            var _closure2_slot1 = vacuum;
            ctrled = oscard.pendingNickname;
            var _closure2_slot2 = ctrled;
            update = oscard.pendingBanner;
            var _closure2_slot3 = update;
            echoed = oscard.pendingBio;
            var _closure2_slot4 = echoed;
            result = oscard.pendingPronouns;
            var _closure2_slot5 = result;
            output = oscard.pendingThemeColors;
            var _closure2_slot6 = output;
            michal = oscard.guild;
            var _closure2_slot7 = michal;
            romeon = oscard.formState;
            source = oscard.pendingAvatarDecoration;
            var _closure2_slot8 = source;
            sizing = oscard.pendingProfileEffectId;
            var _closure2_slot9 = sizing;
            entity = 8;
            entity = tangon[entity];
            tangon = zuuluu.bind(verify)(entity);
            zuuluu = tangon.useGuildAutomodProfileQuarantineErrors;
            report = null;
            option = report == michal;
            entity = undefined;
            if(option) { _fun00002_ip = 230; continue _fun00001 }
 225:
            entity = michal.id;
 230:
            foxtra = zuuluu.bind(tangon)(entity);
            tangon = _closure1_slot0;
            entity = _closure1_slot2;
            zuuluu = entity[offset];
            kiloes = tangon.bind(verify)(zuuluu);
            backup = kiloes.useStateFromStores;
            zuuluu = _closure1_slot5;
            option = new Array(2);
            option[0] = zuuluu;
            zuuluu = _closure1_slot6;
            option[1] = zuuluu;
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure1_slot5;
                    entity = zuuluu.getFormState;
                    zuuluu = entity.bind(zuuluu)();
                    entity = _closure1_slot9;
                    entity = entity.SUBMITTING;
                    entity = zuuluu === entity;
                    if(entity) { _fun00004_ip = 44; continue _fun00003 }
 34:
                    michal = _closure1_slot6;
                    entity = michal.isSubmitting;
 44:
                    return entity;
                }
            };
            option = backup.bind(kiloes)(option, zuuluu);
            zuuluu = {};
            cntext = oscard.errors;
            papara = zuuluu;
            backup = copyDataProperties(papara, cntext);
            papara = zuuluu;
            cntext = foxtra;
            foxtra = copyDataProperties(papara, cntext);
            record = _closure1_slot4;
            kiloes = record.useMemo;
            backup = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 9;
                michal = michal[entity];
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                tangon = entity.DelayedCall;
                entity = tangon.prototype;
                michal = Object.create(entity, {constructor: {value: tangon}});
                oscard = 200;
                report = function() {
                    tangon = _closure1_slot1;
                    oscard = _closure1_slot2;
                    entity = 10;
                    zuuluu = oscard[entity];
                    entity = undefined;
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.wait;
                    report = _closure1_slot0;
                    michal = 11;
                    michal = oscard[michal];
                    michal = report.bind(entity)(michal);
                    michal = michal.resetAllPending;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                golfie = michal;
                entity = new golfie[tangon](oscard, report, tangon);
                entity = entity instanceof Object ? entity : michal;
                return entity;
            };
            foxtra = new Array(0);
            kiloes = kiloes.bind(record)(backup, foxtra);
            var _closure2_slot10 = kiloes;
            config = record.useEffect;
            backup = new Array(1);
            backup[0] = kiloes;
            foxtra = function() {
                entity = function() {
                    michal = _closure2_slot10;
                    entity = michal.cancel;
                    entity = entity.bind(michal)();
                    tangon = _closure1_slot1;
                    oscard = _closure1_slot2;
                    entity = 10;
                    zuuluu = oscard[entity];
                    entity = undefined;
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.wait;
                    report = _closure1_slot0;
                    michal = 11;
                    michal = oscard[michal];
                    michal = report.bind(entity)(michal);
                    michal = michal.resetAllPending;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                return entity;
            };
            foxtra = config.bind(record)(foxtra, backup);
            backup = _closure1_slot1;
            foxtra = 12;
            foxtra = entity[foxtra];
            foxtra = backup.bind(verify)(foxtra);
            foxtra = foxtra.bind(verify)();
            var _closure2_slot11 = foxtra;
            entity = entity[offset];
            foxtra = tangon.bind(verify)(entity);
            offset = foxtra.useStateFromStores;
            entity = _closure1_slot7;
            tangon = new Array(1);
            tangon[0] = entity;
            entity = function() {
                zuuluu = _closure1_slot7;
                michal = zuuluu.getGuild;
                entity = _closure2_slot11;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = offset.bind(foxtra)(tangon, entity);
            offset = option;
            if(offset) { _fun00002_ip = 454; continue _fun00001 }
 440:
            entity = _closure1_slot9;
            entity = entity.CLOSED;
            offset = romeon === entity;
 454:
            var _closure2_slot12 = offset;
            entity = {};
            backup = _closure1_slot4;
            foxtra = backup.useCallback;
            romeon = _closure1_slot3;
            yankee = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00006_ip = 786; continue _fun00005 }
 10:
                        michal = _closure2_slot12;
                        if(michal) { _fun00006_ip = 781; continue _fun00005 }
 23:
                        michal = _closure2_slot0;
                        verify = null;
                        if(!(verify != michal)) { _fun00006_ip = 781; continue _fun00005 }
 36:
                        zuuluu = _closure1_slot0;
                        tangon = _closure1_slot2;
                        michal = 13;
                        golfie = tangon[michal];
                        option = undefined;
                        yankee = zuuluu.bind(option)(golfie);
                        offset = yankee.getGuildMemberChangesForUpdateRequest;
                        golfie = {};
                        romeon = _closure2_slot1;
                        golfie['pendingAvatar'] = romeon;
                        romeon = _closure2_slot2;
                        golfie['pendingNickname'] = romeon;
                        romeon = _closure2_slot8;
                        golfie['pendingAvatarDecoration'] = romeon;
                        backup = offset.bind(yankee)(golfie);
                        michal = tangon[michal];
                        tangon = zuuluu.bind(option)(michal);
                        zuuluu = tangon.getProfileChangesForUpdateRequest;
                        michal = {};
                        golfie = _closure2_slot3;
                        michal['pendingBanner'] = golfie;
                        golfie = _closure2_slot4;
                        michal['pendingBio'] = golfie;
                        golfie = _closure2_slot5;
                        michal['pendingPronouns'] = golfie;
                        golfie = _closure2_slot6;
                        michal['pendingThemeColors'] = golfie;
                        golfie = _closure2_slot9;
                        michal['pendingProfileEffectId'] = golfie;
                        romeon = zuuluu.bind(tangon)(michal);
                        zuuluu = global;
                        tangon = zuuluu.Object;
                        michal = tangon.keys;
                        michal = michal.bind(tangon)(backup);
                        michal = michal.length;
                        golfie = 0;
                        michal = michal > golfie;
                        sizing = true;
                        offset = true;
                        if(!michal) { _fun00006_ip = 506; continue _fun00005 }
 207:
                        tangon = _closure1_slot0;
                        yankee = _closure1_slot2;
                        michal = 11;
                        michal = yankee[michal];
                        yankee = tangon.bind(option)(michal);
                        tangon = yankee.saveGuildIdentityChanges;
                        michal = _closure2_slot7;
                        foxtra = verify == michal;
                        michal = undefined;
                        if(foxtra) { _fun00006_ip = 255; continue _fun00005 }
 246:
                        foxtra = _closure2_slot7;
                        michal = foxtra.id;
 255:
                        michal = tangon.bind(yankee)(michal, backup);
                        SaveGenerator(address=265);
 263:
                        return michal;
 265:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tangon) { _fun00006_ip = 778; continue _fun00005 }
 274:
                        tangon = michal.ok;
                        if(!tangon) { _fun00006_ip = 384; continue _fun00005 }
 283:
                        kiloes = michal.body;
                        tangon = _closure2_slot1;
                        if(!(option !== tangon)) { _fun00006_ip = 384; continue _fun00005 }
 296:
                        yankee = _closure1_slot0;
                        foxtra = _closure1_slot2;
                        tangon = 14;
                        tangon = foxtra[tangon];
                        foxtra = yankee.bind(option)(tangon);
                        yankee = foxtra.trackUserAvatarUpdated;
                        tangon = {};
                        tangon['isGuildProfile'] = sizing;
                        kiloes = kiloes.avatar;
                        tangon['avatarHash'] = kiloes;
                        backup = backup.avatarId;
                        tangon['avatarId'] = backup;
                        backup = _closure2_slot1;
                        kiloes = verify == backup;
                        backup = undefined;
                        if(kiloes) { _fun00006_ip = 374; continue _fun00005 }
 364:
                        kiloes = _closure2_slot1;
                        backup = kiloes.assetOrigin;
 374:
                        tangon['avatarAssetOrigin'] = backup;
                        tangon = yankee.bind(foxtra)(tangon);
 384:
                        tangon = verify != michal;
                        if(!tangon) { _fun00006_ip = 397; continue _fun00005 }
 391:
                        tangon = michal.ok;
 397:
                        if(tangon) { _fun00006_ip = 433; continue _fun00005 }
 400:
                        foxtra = verify == michal;
                        yankee = undefined;
                        if(foxtra) { _fun00006_ip = 429; continue _fun00005 }
 409:
                        foxtra = michal.body;
                        backup = verify == foxtra;
                        yankee = undefined;
                        if(backup) { _fun00006_ip = 429; continue _fun00005 }
 423:
                        yankee = foxtra.avatar;
 429:
                        tangon = verify == yankee;
 433:
                        if(tangon) { _fun00006_ip = 478; continue _fun00005 }
 436:
                        yankee = _closure1_slot0;
                        foxtra = _closure1_slot2;
                        tangon = 15;
                        tangon = foxtra[tangon];
                        foxtra = yankee.bind(option)(tangon);
                        yankee = foxtra.showGenericGuildProfileUpdateFailureToast;
                        tangon = michal.body;
                        tangon = tangon.avatar;
                        tangon = yankee.bind(foxtra)(tangon);
 478:
                        tangon = verify == michal;
                        yankee = undefined;
                        if(tangon) { _fun00006_ip = 493; continue _fun00005 }
 487:
                        yankee = michal.ok;
 493:
                        tangon = verify != yankee;
                        if(!tangon) { _fun00006_ip = 503; continue _fun00005 }
 500:
                        tangon = yankee;
 503:
                        offset = tangon;
 506:
                        tangon = zuuluu.Object;
                        zuuluu = tangon.keys;
                        zuuluu = zuuluu.bind(tangon)(romeon);
                        zuuluu = zuuluu.length;
                        tangon = offset;
                        if(!(zuuluu > golfie)) { _fun00006_ip = 755; continue _fun00005 }
 537:
                        golfie = _closure1_slot0;
                        yankee = _closure1_slot2;
                        zuuluu = 16;
                        zuuluu = yankee[zuuluu];
                        yankee = golfie.bind(option)(zuuluu);
                        golfie = yankee.saveProfileChanges;
                        zuuluu = _closure2_slot7;
                        foxtra = verify == zuuluu;
                        zuuluu = undefined;
                        if(foxtra) { _fun00006_ip = 585; continue _fun00005 }
 576:
                        foxtra = _closure2_slot7;
                        zuuluu = foxtra.id;
 585:
                        zuuluu = golfie.bind(yankee)(romeon, zuuluu);
                        SaveGenerator(address=595);
 593:
                        return zuuluu;
 595:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                        if(golfie) { _fun00006_ip = 775; continue _fun00005 }
 604:
                        if(!(verify != zuuluu)) { _fun00006_ip = 617; continue _fun00005 }
 608:
                        golfie = zuuluu.ok;
                        if(golfie) { _fun00006_ip = 716; continue _fun00005 }
 617:
                        yankee = _closure1_slot0;
                        romeon = _closure1_slot2;
                        golfie = 17;
                        golfie = romeon[golfie];
                        golfie = yankee.bind(option)(golfie);
                        golfie = golfie.APIError;
                        yankee = golfie.prototype;
                        yankee = Object.create(yankee, {constructor: {value: golfie}});
                        echoed = yankee;
                        result = zuuluu;
                        golfie = new echoed[golfie](result, output);
                        romeon = golfie instanceof Object ? golfie : yankee;
                        yankee = romeon.getFirstFieldErrorMessage;
                        golfie = 'banner';
                        yankee = yankee.bind(romeon)(golfie);
                        if(!(verify != yankee)) { _fun00006_ip = 716; continue _fun00005 }
 685:
                        golfie = _closure1_slot0;
                        romeon = _closure1_slot2;
                        oscard = 15;
                        oscard = romeon[oscard];
                        golfie = golfie.bind(option)(oscard);
                        oscard = golfie.showGenericGuildProfileUpdateFailureToast;
                        oscard = oscard.bind(golfie)(yankee);
 716:
                        oscard = offset;
                        golfie = undefined;
                        if(!offset) { _fun00006_ip = 746; continue _fun00005 }
 724:
                        offset = verify == zuuluu;
                        option = undefined;
                        if(offset) { _fun00006_ip = 739; continue _fun00005 }
 733:
                        option = zuuluu.ok;
 739:
                        oscard = verify != option;
                        golfie = option;
 746:
                        if(!oscard) { _fun00006_ip = 752; continue _fun00005 }
 749:
                        oscard = golfie;
 752:
                        tangon = oscard;
 755:
                        if(!tangon) { _fun00006_ip = 772; continue _fun00005 }
 758:
                        oscard = _closure2_slot10;
                        report = oscard.delay;
                        report = report.bind(oscard)();
 772:
                        return tangon;
 775:
                        return zuuluu;
 778:
                        return michal;
 781:
                        michal = undefined;
                        return michal;
 786:
                        return entity;
                    }
                };
                return entity;
            };
            romeon = romeon.bind(verify)(yankee);
            yankee = new Array(12);
            yankee[0] = offset;
            yankee[1] = sequen;
            yankee[2] = vacuum;
            yankee[3] = ctrled;
            yankee[4] = source;
            yankee[5] = update;
            yankee[6] = echoed;
            yankee[7] = result;
            yankee[8] = output;
            yankee[9] = sizing;
            output = report == michal;
            sizing = undefined;
            if(output) { _fun00002_ip = 543; continue _fun00001 }
 538:
            sizing = michal.id;
 543:
            yankee[10] = sizing;
            yankee[11] = kiloes;
            yankee = foxtra.bind(backup)(romeon, yankee);
            entity['handleSubmit'] = yankee;
            entity['isDisabled'] = offset;
            entity['isSubmitting'] = option;
            option = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 11;
            golfie = offset[golfie];
            golfie = option.bind(verify)(golfie);
            golfie = golfie.resetAllPending;
            entity['resetPending'] = golfie;
            papara = entity;
            cntext = oscard;
            oscard = copyDataProperties(papara, cntext);
            if(!(report != michal)) { _fun00002_ip = 620; continue _fun00001 }
 617:
            tangon = michal;
 620:
            michal = 'guild';
            entity[michal] = tangon;
            michal = 'errors';
            entity[michal] = zuuluu;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    michal = 200;
    zuuluu['RESET_DELAY_MS'] = michal;
    return entity;
})();