import aws from 'aws-sdk';

module.exports = app => {
  const getBucket = () => {
    if(process.env.NODE_ENV === 'development'){
      return process.env.DEVELOPMENT_BUCKET
    }else{
      return process.env.PRODUCTION_BUCKET
    }
  }

  const remove = async (key, bucket) => {
    const s3 = new aws.S3();
    return s3.deleteObject({
      Bucket: bucket,
      Key: key
    }).promise();
  }

  return { remove, getBucket };
}