// app/modules/routing/transitionToChannel.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = option;
    report = function(argFoo, argBar) { // Original name: transitionToChannel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argBar;
            tangon = _closure1_slot3;
            zuuluu = tangon.getChannel;
            entity = argFoo;
            entity = zuuluu.bind(tangon)(entity);
            zuuluu = null;
            if(!(zuuluu != entity)) { _fun00002_ip = 233; continue _fun00001 }
 32:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            tangon = 2;
            tangon = option[tangon];
            report = undefined;
            verify = golfie.bind(report)(tangon);
            tangon = verify.getGuildIdForGenericRedirect;
            yankee = tangon.bind(verify)(entity);
            verify = _closure1_slot1;
            tangon = 3;
            tangon = option[tangon];
            romeon = verify.bind(report)(tangon);
            offset = romeon.preload;
            verify = entity.guild_id;
            tangon = entity.id;
            tangon = offset.bind(romeon)(verify, tangon);
            tangon = 4;
            tangon = option[tangon];
            offset = golfie.bind(report)(tangon);
            verify = offset.transitionTo;
            option = _closure1_slot4;
            golfie = option.CHANNEL;
            tangon = entity.id;
            option = golfie.bind(option)(yankee, tangon);
            golfie = {};
            tangon = true;
            golfie['openChannel'] = tangon;
            backup = golfie;
            foxtra = oscard;
            yankee = copyDataProperties(backup, foxtra);
            golfie = verify.bind(offset)(option, golfie);
            zuuluu = zuuluu != oscard;
            if(!zuuluu) { _fun00002_ip = 180; continue _fun00001 }
 174:
            zuuluu = oscard.openTextInVoiceIfVoiceChannel;
 180:
            if(!zuuluu) { _fun00002_ip = 193; continue _fun00001 }
 183:
            oscard = entity.isGuildVocal;
            zuuluu = oscard.bind(entity)();
 193:
            if(!zuuluu) { _fun00002_ip = 233; continue _fun00001 }
 196:
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 5;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.updateChatOpen;
            entity = entity.id;
            entity = michal.bind(zuuluu)(entity, tangon);
 233:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot5 = report;
    tangon = function(argFoo, argBar, argBaz) { // Original name: transitionToThreadMessage
        michal = argFoo;
        report = _closure1_slot1;
        oscard = _closure1_slot2;
        entity = 6;
        tangon = oscard[entity];
        entity = undefined;
        golfie = report.bind(entity)(tangon);
        report = michal.parent_id;
        tangon = null;
        report = tangon != report;
        tangon = 'Thread must have a parent ID.';
        tangon = golfie.bind(entity)(report, tangon);
        report = _closure1_slot0;
        tangon = 2;
        tangon = oscard[tangon];
        golfie = report.bind(entity)(tangon);
        tangon = golfie.getGuildIdForGenericRedirect;
        option = tangon.bind(golfie)(michal);
        tangon = 4;
        tangon = oscard[tangon];
        report = report.bind(entity)(tangon);
        tangon = report.transitionTo;
        golfie = _closure1_slot4;
        oscard = golfie.CHANNEL;
        zuuluu = michal.id;
        michal = argBar;
        zuuluu = oscard.bind(golfie)(option, zuuluu, michal);
        michal = {};
        oscard = true;
        michal['openChannel'] = oscard;
        offset = argBaz;
        yankee = michal;
        oscard = copyDataProperties(yankee, offset);
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    var _closure1_slot6 = tangon;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 1;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.Routes;
    var _closure1_slot4 = oscard;
    oscard = 7;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/routing/transitionToChannel.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['transitionToChannel'] = report;
    report = function(argFoo, argBar) { // Original name: transitionToThread
        michal = argFoo;
        report = _closure1_slot1;
        oscard = _closure1_slot2;
        entity = 6;
        tangon = oscard[entity];
        entity = undefined;
        golfie = report.bind(entity)(tangon);
        report = michal.parent_id;
        tangon = null;
        report = tangon != report;
        tangon = 'Thread must have a parent ID.';
        tangon = golfie.bind(entity)(report, tangon);
        report = _closure1_slot0;
        tangon = 2;
        tangon = oscard[tangon];
        golfie = report.bind(entity)(tangon);
        tangon = golfie.getGuildIdForGenericRedirect;
        golfie = tangon.bind(golfie)(michal);
        tangon = 4;
        tangon = oscard[tangon];
        report = report.bind(entity)(tangon);
        tangon = report.transitionTo;
        oscard = _closure1_slot4;
        zuuluu = oscard.CHANNEL;
        michal = michal.id;
        zuuluu = zuuluu.bind(oscard)(golfie, michal);
        michal = {};
        oscard = true;
        michal['openChannel'] = oscard;
        option = argBar;
        verify = michal;
        oscard = copyDataProperties(verify, option);
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['transitionToThread'] = report;
    zuuluu['transitionToThreadMessage'] = tangon;
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: tryTransitionToThreadMessage
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argCor;
            tangon = _closure1_slot3;
            zuuluu = tangon.getChannel;
            michal = argBar;
            tangon = zuuluu.bind(tangon)(michal);
            michal = null;
            if(!(michal == tangon)) { _fun00004_ip = 46; continue _fun00003 }
 29:
            oscard = _closure1_slot5;
            zuuluu = undefined;
            michal = argFoo;
            michal = oscard.bind(zuuluu)(michal, report);
            _fun00004_ip = 62; continue _fun00003;
 46:
            zuuluu = _closure1_slot6;
            michal = undefined;
            entity = argBaz;
            entity = zuuluu.bind(michal)(tangon, entity, report);
 62:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['tryTransitionToThreadMessage'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: transitionToMessage
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = _closure1_slot3;
            zuuluu = tangon.getChannel;
            entity = argFoo;
            entity = zuuluu.bind(tangon)(entity);
            zuuluu = null;
            if(!(zuuluu != entity)) { _fun00006_ip = 127; continue _fun00005 }
 26:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 2;
            zuuluu = oscard[zuuluu];
            tangon = undefined;
            golfie = report.bind(tangon)(zuuluu);
            zuuluu = golfie.getGuildIdForGenericRedirect;
            golfie = zuuluu.bind(golfie)(entity);
            zuuluu = 4;
            zuuluu = oscard[zuuluu];
            tangon = report.bind(tangon)(zuuluu);
            zuuluu = tangon.transitionTo;
            oscard = _closure1_slot4;
            report = oscard.CHANNEL;
            michal = entity.id;
            entity = argBar;
            michal = report.bind(oscard)(golfie, michal, entity);
            entity = {};
            report = true;
            entity['openChannel'] = report;
            verify = argBaz;
            offset = entity;
            report = copyDataProperties(offset, verify);
            entity = zuuluu.bind(tangon)(michal, entity);
 127:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['transitionToMessage'] = tangon;
    michal = function(argFoo, argBar, argBaz) { // Original name: transitionToStaticChannelRoute
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 4;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.transitionTo;
        golfie = _closure1_slot4;
        oscard = golfie.CHANNEL;
        zuuluu = argFoo;
        michal = argBar;
        zuuluu = oscard.bind(golfie)(zuuluu, michal);
        michal = {};
        oscard = true;
        michal['openChannel'] = oscard;
        option = argBaz;
        verify = michal;
        oscard = copyDataProperties(verify, option);
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['transitionToStaticChannelRoute'] = michal;
    return entity;
})();