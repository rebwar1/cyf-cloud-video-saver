# Terraform Initialize

✅terraform init

# Terraform Validate

✅terraform validate

# Terraform Plan

✅terraform plan
Observation:

1. Review Security Group resources
2. Review EC2 Instance resources
3. Review all other resources (vpc, elasticip)

# Terraform Apply

✅terraform apply -auto-approve

Connect to Private EC2 Instances from Bastion EC2 Instance

✅chmod 400 private-key/terraform-key.pem

✅ssh -i private-key/terraform-key.pem ec2-user@35.179.69.6

cd /tmp

ls -lrta

✅curl http://10.0.2.99

✅curl http://10.0.1.235/app1-install/metadata.html

# 💫💫 throw the public sign to private 💫💫

ssh -i /tmp/terraform-key.pem ec2-user@<Private-Instance-1-Private-IP>

✅ssh -i /tmp/terraform-key.pem ec2-user@10.0.2.99

cd /var/www/html

cd /var/log

````

## Step-13: Clean-Up

```t
# Terraform Destroy
terraform destroy -auto-approve

# Clean-Up
rm -rf .terraform*
rm -rf terraform.tfstate*
```
````

Terraform will display the execution plan and ask for confirmation before applying the changes. Once confirmed, it will create the MySQL RDS instance. You can monitor the progress in your AWS Management Console or by running:

# terraform show

If we want to automatically format the Terraform configuration files and ensure consistent and readable code it is done by applying a standard style and for that purpose we use Terraform fmt command.

# terraform fmt
