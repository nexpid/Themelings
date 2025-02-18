// app/modules/rpc/helpers/transformUser.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = 1;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/rpc/helpers/transformUser.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: transformUser
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            offset = entity.id;
            verify = entity.username;
            golfie = entity.discriminator;
            oscard = entity.globalName;
            michal = entity.avatar;
            option = entity.avatarDecoration;
            report = entity.bot;
            tangon = entity.flags;
            zuuluu = entity.premiumType;
            entity = {};
            entity['id'] = offset;
            entity['username'] = verify;
            entity['discriminator'] = golfie;
            entity['global_name'] = oscard;
            entity['avatar'] = michal;
            verify = _closure1_slot0;
            oscard = _closure1_slot1;
            michal = 0;
            golfie = oscard[michal];
            oscard = undefined;
            golfie = verify.bind(oscard)(golfie);
            oscard = golfie.parseAvatarDecorationData;
            oscard = oscard.bind(golfie)(option);
            entity['avatar_decoration_data'] = oscard;
            entity['bot'] = report;
            entity['flags'] = tangon;
            tangon = null;
            tangon = tangon != zuuluu;
            if(!tangon) { _fun00002_ip = 140; continue _fun00001 }
 137:
            michal = zuuluu;
 140:
            entity['premium_type'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();